import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';

const Stats = () => {

    return (
        <div className={`${styles.paddingX}`}>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionHeadText} text-center`}>Github Stats</p>
            </motion.div>
            
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px]'
            >
                <div className="max-w-fit m-auto calendar react-activity-calendar">
                    <GitHubCalendar username="git-rishab" />
                </div>

                <div className="flex justify-center m-auto mt-10">
                    <div id="github-stats-card" className="mr-10">
                        <img src="https://github-readme-stats.vercel.app/api?username=git-rishab&theme=material-palenight&show_icons=true" alt="Github stats" />
                    </div>
                    <div id="github-top-langs">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=git-rishab&hide_progress=false&theme=material-palenight" alt="Most used languages" />
                    </div>
                </div>

            </motion.p>
        </div>
    )
}

export default Stats;