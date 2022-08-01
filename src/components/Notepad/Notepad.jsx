                                                                                                            import React, { useState } from 'react';
import { TbNotes, TbBell, TbSubtask, TbBallpen, TbClock } from "react-icons/tb";
// import {  Link } from 'react-router-dom';
import { GrFavorite, GrSearch } from "react-icons/gr";
import { SiNotepadplusplus } from "react-icons/si";
import styles from './Notepad.module.css';

function Notepad() {
  const [isOpen, setIsOpen] = useState(false)
  const [task, setTask] = useState('')
  const [list, setList] = useState([])

  const openFormHandler = () => {
    setIsOpen(true)
  }

  const changeHandler = (e) => {
    console.log('change')
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
    const data = {
      id: list.length,
      text: task,
      createdAt: new Date()
    }
    setList([...list, data])
    setTask('')
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      {/* <div className={styles.header}> */}
      <div className={styles.sideNav}>
        {/* <h1 className={styles.logoImg}>MyNotes</h1> */}
        <SiNotepadplusplus className={styles.logoImg} />
        {/* <SiNotepadplusplus className={styles.logoIcon} /> */}

        <ul className={styles.navlist}>
          <li>
            <button onClick={openFormHandler}>
              <TbNotes />
              <p>All notes</p>
            </button>
          </li>
          <li>
            <TbBell className={styles.icon} />
            <p>Reminders</p>
          </li>
          <li>
            <TbSubtask className={styles.icon} />
            <p>Tasks</p>
          </li>
          <li>
            <GrFavorite className={styles.icon} />
            <p>Favorites</p>
          </li>
          <li>
            <TbBallpen className={styles.icon} />
            <p>Highlights</p>
          </li>
          <li>
            <TbClock className={styles.icon} />
            <p>Activity</p>
          </li>
          <li>
            <GrSearch className={styles.icon} />
            <p>Saved search</p>
          </li>
          <div className={styles.active}></div>
        </ul>
      </div>
      {/* </div> */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {isOpen && (
            <Form
              task={task}
              setTask={setTask}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          )}

          <input type="text" value={task} name="text" placeholder="Search" />

          <div>
            <h2>All notes</h2>
          </div>
          <ul>
            <li>list 1</li>
            <li>list 2</li>
            <li>list 3</li>
            <li>list 4</li>
          </ul>
        </div>
      </div>
    </div>
  );      
}


  const Form = ({ task, setTask, changeHandler, submitHandler }) => {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <textarea name="task" value={task} id="" cols="30" rows="10" onChange={changeHandler} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };


export default Notepad;