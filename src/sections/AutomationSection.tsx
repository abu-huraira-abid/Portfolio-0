import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Workflow, PhoneCall, Bot, Database, Link, FileAudio, Languages, FileText, Video, CloudUpload, RefreshCw } from "lucide-react";

type WorkflowStep = { name: string; icon: LucideIcon };
type WorkflowFlow = { name: string; type: string; description: string; stack: string; status: string; steps: WorkflowStep[] };

const flows: WorkflowFlow[] = [
  { name: "Kaidu", type: "Voice & CRM automation", description: "A customer calling agent for a webstore, connected to CRM management automation.", stack: "n8n · Dograh AI · Frappe CRM", steps: [{ name: "Webstore customer", icon: PhoneCall }, { name: "Calling agent", icon: Bot }, { name: "CRM management", icon: Database }], status: "Project workflow" },
  { name: "Video transcription", type: "Content automation", description: "A video URL from Telegram or Google Sheets triggers audio download, translation and a document saved in Google Docs.", stack: "n8n · Telegram / Google Sheets · Google Docs", steps: [{ name: "Video URL", icon: Link }, { name: "Download audio", icon: FileAudio }, { name: "Translate", icon: Languages }, { name: "Save document", icon: FileText }], status: "In development" },
  { name: "NoteOne Guitar", type: "Lecture storage automation", description: "Move lecture recordings from Zoom to S3, remove the Zoom recording and update the video link in the application.", stack: "Laravel · Zoom · Amazon S3", steps: [{ name: "Zoom recording", icon: Video }, { name: "Save to S3", icon: CloudUpload }, { name: "Remove from Zoom", icon: Video }, { name: "Update app link", icon: RefreshCw }], status: "Project workflow" },
];

function WorkflowCard({ step, index, reduceMotion, totalSteps }: { step: WorkflowStep; index: number; reduceMotion: boolean | null; totalSteps: number }) {
  const Icon = step.icon;

  // Cards are STATIONARY after they land. Only animate during tab switch:
  // ENTER: zoom in from background + 360° spin → STOP
  // EXIT: 360° spin + zoom out into background → disappear
  const enterDelay = index * 0.14;
  const exitDelay = (totalSteps - 1 - index) * 0.08;

  return (
    <motion.div
      className="workflow-card-wrap"
      initial={reduceMotion ? { opacity: 0, scale: 0.8 } : {
        opacity: 0,
        scale: 0.05,
        rotateY: -360,
        z: -800,
        filter: "blur(18px)",
      }}
      animate={reduceMotion ? { opacity: 1 } : {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        z: 0,
        filter: "blur(0px)",
      }}
      exit={reduceMotion ? { opacity: 0 } : {
        opacity: 0,
        scale: 0.05,
        rotateY: 360,
        z: -800,
        filter: "blur(18px)",
        transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: exitDelay },
      }}
      transition={{
        opacity: { duration: 0.3, delay: enterDelay },
        scale: { type: "spring", stiffness: 80, damping: 14, delay: enterDelay },
        rotateY: { type: "spring", stiffness: 60, damping: 14, delay: enterDelay },
        z: { type: "spring", stiffness: 60, damping: 14, delay: enterDelay },
        filter: { duration: 0.35, delay: enterDelay },
      }}
    >
      <div className="workflow-card">
        <div className="workflow-card-shine" aria-hidden="true" />
        <div className="workflow-card-inner" aria-hidden="true" />
        <div className="workflow-icon"><Icon size={29} strokeWidth={1.55} /></div>
        <span className="workflow-step-number">0{index + 1}</span>
      </div>
      <h3>{step.name}</h3>
    </motion.div>
  );
}

export default function AutomationSection() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const flow = flows[selected];

  // Stage wrapper waits for cards to finish their 360° exit spin before disappearing
  const stageMotion = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: reduceMotion ? 0.12 : 0.15 } },
    exit: reduceMotion
      ? { opacity: 0, transition: { duration: 0.12 } }
      : { opacity: 0, transition: { when: "afterChildren" as const, duration: 0.7 } },
  };

  return (
    <section id="automation" className="section-padding automation-section">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="automation-intro">
          <span className="showcase-eyebrow"><Workflow size={15} /> AUTOMATION IN ACTION</span>
          <h2>From a trigger.<br /><span className="gradient-text">To a finished task.</span></h2>
          <p>Connected systems that handle the repetitive work. Explore how my automation projects fit together.</p>
        </motion.div>

        <div className="automation-board">
          <div className="automation-tabs" role="group" aria-label="Choose an automation project">
            {flows.map((item, index) => (
              <button key={item.name} aria-pressed={index === selected} onClick={() => setSelected(index)}>
                <span>0{index + 1}</span>{item.name}
              </button>
            ))}
          </div>

          <div className="automation-canvas">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={flow.name}
                className="workflow-stage"
                variants={stageMotion}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flow-header"><span>{flow.type}</span><span className="flow-status">{flow.status}</span></div>
                <motion.div className="workflow-steps" initial="hidden" animate="visible" exit="exit" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.13, delayChildren: reduceMotion ? 0 : 0.18 } } }}>
                  {flow.steps.map((step, index) => (
                    <div className="workflow-step-group" key={step.name}>
                      <WorkflowCard step={step} index={index} reduceMotion={reduceMotion} totalSteps={flow.steps.length} />
                      {index < flow.steps.length - 1 && <motion.div className="workflow-connector" aria-hidden="true" variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { delay: reduceMotion ? 0 : 0.42 + index * 0.13, duration: 0.3 } }, exit: { opacity: 0, scaleX: 0, transition: { duration: 0.24 } } }}><i /></motion.div>}
                    </div>
                  ))}
                </motion.div>
                <div className="flow-description" aria-live="polite"><p>{flow.description}</p><span>{flow.stack}</span></div>
              </motion.div>
            </AnimatePresence>
            <div className="flow-bottom"><span>Tab switch to see 3D transitions</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
