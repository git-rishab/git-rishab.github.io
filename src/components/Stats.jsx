import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';

const Stats = () => {

    return (
        <div className={`${styles.paddingX} mt-20`}>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionHeadText} text-center text-[#0E0F1F]`}>Github Stats</p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#0E0F1F] border-0 dark:bg-[#0E0F1F]" />
                    <span className={`${styles.sectionSubText} absolute px-3 font-medium text-[#407BFF] -translate-x-1/2 bg-black left-1/2 dark:text-[#407BFF]  dark:bg-white`}>what i did</span>
                </div>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px]'
            >
                <div className="w-full m-auto flex justify-center">
                    <GitHubCalendar username="git-rishab" />
                </div>

                <div className="flex justify-center m-auto mt-20 flex-col lg:flex-row gap-5 items-center">
                    <div>
                        <img src="https://github-readme-streak-stats.herokuapp.com?user=git-rishab&theme=material-palenight&hide_border=true" alt="Streak Stats" id="github-streak-stats" />
                    </div>
                    <div className="">
                        <img src="https://github-readme-stats.vercel.app/api?username=git-rishab&theme=material-palenight&show_icons=true" alt="Github stats" id="github-stats-card" />
                    </div>
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=git-rishab&hide_progress=false&theme=material-palenight" alt="Most used languages" id="github-top-langs" />
                    </div>
                </div>

            </motion.p>
        </div>
    )
}

export default Stats;