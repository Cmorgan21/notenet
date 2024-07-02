import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div
      className={`bg-neutral-600 overflow-y-auto flex flex-col items-center text-white z-10 min-h-screen py-12 px-4 md:px-0 font-arimo ${styles.animatedBackground}`}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Notenet
        </h1>
        <p className="text-xl md:text-2xl mb-8">The app for creating notes</p>
        <h2 className="text-3xl md:text-3xl font-bold mt-12 text-center">
          Never forget important meetings, tasks, or notes again
        </h2>
      </div>
      <div className="max-w-4xl mt-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
          Here's how it's done
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8">
            <p className="text-2xl md:text-3xl mb-4">
              Sign in or create an account
            </p>
            <img
              src="https://res.cloudinary.com/dbjm35bjd/image/upload/v1719599603/signup_instruction192806_mnvmzr.png"
              alt="Sign in or create an account"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <p className="text-2xl md:text-3xl mb-4">
              Click Notes and Click this icon
            </p>
            <img
              src="https://res.cloudinary.com/dbjm35bjd/image/upload/v1719600955/Screenshot_2024-06-28_195545_s87yro.png"
              alt="Click Create Note"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <p className="text-2xl md:text-3xl mb-4">
              See all notes in one place
            </p>
            <img
              src="https://res.cloudinary.com/dbjm35bjd/image/upload/v1719600087/Screenshot_2024-06-28_194046_fwm0qy.png"
              alt="Create your first note"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <p className="text-2xl md:text-3xl mb-4">View a specific note!</p>
            <img
              src="https://res.cloudinary.com/dbjm35bjd/image/upload/v1719602000/Screenshot_2024-06-28_201311_xw5zzl.png"
              alt="Click Done"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <h2 className="text-3xl md:text-3xl font-bold mt-12 text-center">
          Still not sure? How about a video?
        </h2>
        <div className="flex justify-center mt-8">
          <video
            className="w-full md:w-2/3 rounded-lg shadow-lgm z-10"
            controls
            muted={true}
            src="https://res.cloudinary.com/dbjm35bjd/video/upload/v1719833369/Screen_Recording_2024-07-01_122716_lczx1e.mp4"
            alt="How to use Notenet"
          ></video>
        </div>
      </div>
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Home;
