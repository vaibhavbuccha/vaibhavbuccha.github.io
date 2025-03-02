import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      <div className="h-[90vh] flex justify-center items-center gap-10" >
        <img 
          src="https://avatars.githubusercontent.com/u/29331854?v=4"
          className="rounded-lg w-[300] h-[300px]"
        />

        <div className="max-w-[500px]" >
          <h4 className="text-[50px] text-blue-600" >
            <span className="text-white" >Hi, I’m</span>  Vaibhav Buccha <span  >👋</span>
          </h4>
          <p className="text-lg leading-[30px] font-mono text-white" >
            I’m an IT professional with 4+ years of experience, currently working with Sureworx. I specialize in full-stack web and mobile development, leveraging the MERN stack (MongoDB, Express, React, Node.js) and other cutting-edge technologies to build scalable and high-performance applications.
          </p>
          <div className="flex items-center justify-center gap-5 mt-2" >
              <a href="https://github.com/vaibhavbuccha" target="_blank" title="Github" >
                <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" width={40} height={40}  className="rounded-lg" />
              </a>
              <a href="https://www.linkedin.com/in/vaibhavbuccha/" target="_blank" title="Linked In" >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2FlinkedIn%2FlinkedIn_PNG6.png&f=1&nofb=1&ipt=5233518f12de374a9ea4d0ef9e3fa167f18149d96ad3d173079eb84f63dff285&ipo=images" width={40} height={40}  className="rounded-lg" />
              </a>
              <a href="mailto:jainvaibhav415@gmail.com" target="_blank" title="Gmail" >
                <img src="https://cdn2.downdetector.com/static/uploads/logo/gmail_logo_hSykdMC.jpeg" width={40} height={40}  className="rounded-lg" />
              </a>
              <a href="https://medium.com/@vaibhavbuccha" target="_blank" title="Medium" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8jMitTcRGxPlXr0zTyHJ33WHRqApHpAMlg&s" width={40} height={40}  className="rounded-lg" />
              </a>
              <a href="https://leetcode.com/u/vaibhavbuccha/" target="_blank" title="Leet code" >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleetcode.com%2Fstatic%2Fimages%2FLeetCode_logo_rvs.png&f=1&nofb=1&ipt=241a8f35f2089018b321e27f033473c2445be25caeeffd5e48e0a0cb7f7baf51&ipo=images" width={40} height={40}  className="rounded-lg" />
              </a>
              <a href="https://www.hackerrank.com/profile/vaibhavbuccha" target="_blank"  title="hacker rank">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands%2F512%2F160_Hackerrank_logo_logos-1024.png&f=1&nofb=1&ipt=df9d96306df49df0aba7e1a64418c508bee03efc627122ca2e37064005ec505b&ipo=images" width={40} height={40}  className="rounded-lg" />
              </a>
          </div>
        </div>
      </div>
    </motion.h1>
  )
}

export default Intro