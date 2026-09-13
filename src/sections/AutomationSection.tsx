import { useState } from "react";
import { motion } from "framer-motion";
import { Workflow, PhoneCall, Bot, Database, Link, FileAudio, Languages, FileText, Video, CloudUpload, RefreshCw, Play, Pause } from "lucide-react";
const flows = [
  { name: "Kaidu", type: "Voice & CRM automation", description: "A customer calling agent for a webstore, connected to CRM management automation.", stack: "n8n · Dograh AI · Frappe CRM", steps: [{ name: "Webstore customer", icon: PhoneCall }, { name: "Calling agent", icon: Bot }, { name: "CRM management", icon: Database }], status: "Project workflow" },
  { name: "Video transcription", type: "Content automation", description: "A video URL from Telegram or Google Sheets triggers audio download, translation and a document saved in Google Docs.", stack: "n8n · Telegram / Google Sheets · Google Docs", steps: [{ name: "Video URL", icon: Link }, { name: "Download audio", icon: FileAudio }, { name: "Translate", icon: Languages }, { name: "Save document", icon: FileText }], status: "In development" },
  { name: "NoteOne Guitar", type: "Lecture storage automation", description: "Move lecture recordings from Zoom to S3, remove the Zoom recording and update the video link in the application.", stack: "Laravel · Zoom · Amazon S3", steps: [{ name: "Zoom recording", icon: Video }, { name: "Save to S3", icon: CloudUpload }, { name: "Remove from Zoom", icon: Video }, { name: "Update app link", icon: RefreshCw }], status: "Project workflow" },
];
export default function AutomationSection() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const flow = flows[selected];
  return <section id="automation" className="section-padding automation-section"><div className="section-container">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="automation-intro"><span className="showcase-eyebrow"><Workflow size={15} /> AUTOMATION IN ACTION</span><h2>From a trigger.<br /><span className="gradient-text">To a finished task.</span></h2><p>Connected systems that handle the repetitive work. Explore how my automation projects fit together.</p></motion.div>
    <div className="automation-board"><div className="automation-tabs" role="group" aria-label="Choose an automation project">{flows.map((item, index) => <button key={item.name} aria-pressed={index === selected} onClick={() => setSelected(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
      <div className={`automation-canvas ${paused ? "flow-paused" : ""}`}><div className="flow-header"><span>{flow.type}</span><span className="flow-status">{flow.status}</span></div>
        <div className="flow-steps" key={flow.name}>{flow.steps.map((step, index) => <div className="flow-step" key={step.name}><div className="flow-node" style={{ animationDelay: `${index * .7}s` }}><step.icon size={27} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{step.name}</h3>{index < flow.steps.length - 1 && <div className="flow-connector" aria-hidden="true"><i style={{ animationDelay: `${index * .7}s` }} /></div>}</div>)}</div>
        <div className="flow-description" aria-live="polite"><p>{flow.description}</p><span>{flow.stack}</span></div><div className="flow-bottom"><span>Workflow overview</span><button onClick={() => setPaused(!paused)}>{paused ? <Play size={13} /> : <Pause size={13} />}{paused ? "Play motion" : "Pause motion"}</button></div>
      </div>
    </div>
  </div></section>;
}
