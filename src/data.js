export const personalInfo = {
  name: "Bhavish Rai B",
  tagline: "Programming and building robots that can operate effectively in complex and real world applications",
  email: "bhavishraib@gmail.com",
  footerTagline: "Building robots that reason, adapt, and act.",
  location: "IIT Gandhinagar, India",
  github: "https://github.com/braib",
  linkedin: "https://www.linkedin.com/in/bhavish-rai-b-761421231/",
  // scholar: "https://scholar.google.com/",
  resume: require("./assets/Bhavish_Rai_B-CV.pdf"),
  profileImage: require("./assets/bhavish.png")
};

export const about = {
bio: `I'm a robotics engineer building intelligent systems that bridge the gap between AI research and real-world deployment. My work focuses on multi-robot coordination connecting LLM-based task planning, VLM perception, and ROS2 execution into systems that actually work on real hardware.

Currently a Program Assistant at IIT Gandhinagar, where I work with platforms like Unitree Go2, TurtleBot3, and SO-101 arms. My research on CoMuRoS a hierarchical multi-robot architecture - has been published at IROS 2025 and ArXiv.

I care about robots that don't just simulate well, but deploy reliably.`,
  education: [
    {
      degree: "Bachelor of Engineering in Robotics and Automation ",
      institution: "Sahyadri College of Engineering and Management Adyar, Mangaluru",
      year: "2021-2025",
      marks: "CGPA: 8.31 / 10"
    },
    {
      degree: "Pre-University Education (PCMCs)",
      institution: "Sri Rama Pre-University College, Kalladka",
      year: "2019-2021",
      marks: "86%"
    },
      {
      degree: "Secondary Education (SSLC)",
      institution: "Govt. High School Beliyurukatte, Puttur",
      year: "2019",
      marks: "84.64%"
    }
  ],
  experience: [
    {
      role: "Program Assistant - I ",
      organization: "IIT Gandhinagar Robotics Lab",
      location: 'Gannghinagar, Gujarat',
      period: "2025 June -Present"
    },
    {
      role: "Robotics Research Intern",
      organization: "IIT Gandhinagar Robotics Lab",
      location: 'Gannghinagar, Gujarat',
      period: "January 2025 - May 2025"
    },
    {
      role: "Research Intern",
      organization: "Technical Career Education",
      location: 'Mangaluru, Karnataka',
      period: "October 2023 - November 2023"
    }
  ]
};

export const featuredProjects = [
  {
    id: 1,
    slug: "comuros",
    title: "CoMuRoS: Collaborative Multi-Robot System",
    shortDesc: "Developed a generalizable hierarchical architecture for LLM-driven task planning and event-driven replanning in heterogeneous multi-robot teams, unifying centralized deliberation with decentralized execution.",
    
    fullDescription: `CoMuRoS is a hierarchical multi-robot architecture that bridges LLM-based task planning with real ROS2 hardware execution for heterogeneous robot teams.

## Task Manager LLM
Implemented a Task Manager LLM for natural-language goal interpretation and dynamic task allocation using static rules and contextual information including task history, robot status, and runtime events. Tasks are classified into four categories: Independent, Sequential, Coordinated, and Infeasible.

## Local Robot LLMs
Designed local robot LLMs that compose executable Python code from primitive ROS2 skills, with onboard VLM-based perception (OwlViT + GPT-4.1 VQA) for continuous event monitoring and classification.

## Hardware Results
- 90% collaborative object recovery success (9/10 trials)
- 100% coordinated transport success (8/8 trials)
- 100% human-assisted recovery success (5/5 trials)

## Benchmarking
Evaluated across 22 diverse scenarios (3 tasks each) with 8 LLMs. Achieved average correctness of 0.91 with Grok-3. Replanning dataset achieved perfect correctness (1.0) across all 5 scenarios.

## Key Capabilities
Demonstrated autonomous recovery from disruptive events, filtering of irrelevant distractions, and emergent human-robot cooperation through runtime replanning. Supports anytime human interaction — feedback, corrections, interruptions, or new commands.

## Stack
Developed using ROS2 Humble with Python, simulated in Gazebo Classic and Ignition Fortress. Tested on Unitree Go2, TurtleBot3 Burger, TurtleBot3 Waffle Pi with OpenManipulator-X.`,

    category: ["AI/ML", "Multi-Robot", "Control"],
    tech: ["Python", "ROS2", "Gazebo Classic", "Ignition Fortress", "LLM", "VLM"],
    
    media: [
      {
        type: "youtube",
        url: "https://youtu.be/9zOm0uG16YQ",
        caption: "Demo Video"
      },
      {
        type: "youtube",
        url: "https://youtu.be/7QZDq5MSq1A",
        caption: "Multi-robot collaborative object recovery with event-driven replanning"
      },
      {
        type: "youtube",
        url: "https://youtu.be/UtOMZBV_mUQ",
        caption: "Multi-robot collaborative object recovery with event-driven replanning"
      },
      {
        type: "youtube",
        url: "https://youtu.be/qp81etRRkfg",
        caption: "Hospital scenario: anytime human interruption and replanning"
      },
      {
        type: "youtube",
        url: "https://youtu.be/RCi28zFyGT4",
        caption: "Disaster relief scenario simulation"
      }
    ],
    
    metrics: {
      performance: "0.91 avg correctness (Grok-3)",
      accuracy: "9/10 collaborative recovery",
      custom: [
        { label: "Scenarios Benchmarked", value: "22" },
        { label: "LLMs Evaluated", value: "8" },
        { label: "Replanning Correctness", value: "1.0" },
        { label: "Coordinated Transport", value: "8/8" }
      ]
    },
    
    featured: true,
    
    links: [
      { type: "paper", url: "https://arxiv.org/pdf/2511.22354", label: "ArXiv Paper" },
      { type: "website", url: "https://comuros.github.io", label: "Website" },
    ],
    
    details: {
      duration: "Jan 2025 - Present",
      team: "IIT Gandhinagar — Suraj Borate, Bhavish Rai B, Vipul Pardeshi, Madhu Vadali",
      status: "Submitted to Autonomous Robots (ArXiv 2025); IROS 2025 Workshop accepted",
      tags: ["LLM", "Multi-Robot", "ROS2", "Event-Driven Replanning", "Human-Robot Collaboration"]
    }
  },
  {
    id: 2,
    slug: "tutorbot",
    title: "LLM-Driven Bimanual TutorBot",
    shortDesc: "Built a bimanual social robot from scratch using LeRobot arms and LLMs, capable of communicating through voice and guiding students in assembly tasks using the CoMuRoS architecture as backbone.",
    
    fullDescription: `A bimanual social tutorbot built from scratch at IIT Gandhinagar, capable of interacting with students through voice and facial expressions while guiding them through assembly tasks.

## Architecture
Used the CoMuRoS architecture as the backbone, treating the two robotic arms as a multi-robot system. The Task Manager LLM coordinates arm actions while a Socratic-style dialogue system handles student interaction.

## Hardware
- Two LeRobot (SO-101) arms as bimanual manipulators
- Display screen for facial expressions to improve human-robot interaction
- Microphone input for real-time voice-based queries from students

## Capabilities
- Real-time assistance for students performing assembly tasks
- Socratic-style verbal guidance and action-based demonstrations
- Object picking and visual hint demonstration to assist task completion
- Enabled pick and place using fine-tuned Nvidia GR00T VLA

## Data & Training
Fabricated 3 LeRobot arms. Performed data collection and finetuning of Nvidia GR00T VLA with successful pick-and-place testing.`,

    category: ["AI/ML", "Multi-Robot"],
    tech: ["Python", "ROS2", "LLM", "LeRobot", "GR00T", "VLA", "CoMuRoS"],
    
    media: [
      {
        type: "youtube",
        url: "https://youtu.be/prKxY8W90FI",
        caption: "Bimanual TutorBot guiding a student through an assembly task"
      },
      {
        type: "youtube",
        url: "https://youtu.be/eW0Lzo4yQyo",
        caption: "Pick and place using fine-tuned GR00T VLA"
      }
    ],
    
    metrics: {
      performance: "Real-time voice interaction",
      accuracy: "Successful VLA pick-and-place",
      custom: [
        { label: "Arms", value: "2x LeRobot SO-101" },
        { label: "Interaction Mode", value: "Voice + Vision" },
        { label: "Model", value: "GR00T VLA (fine-tuned)" }
      ]
    },
    
    featured: true,
    
    links: [
      { type: "demo", url: "https://youtu.be/prKxY8W90FI", label: "Demo Video" },
      { type: "demo", url: "https://youtu.be/eW0Lzo4yQyo", label: "VLA Demo" },
      { type: "paper", url: "https://www.youtube.com/watch?v=dA2D3FWFkds", label: "ROSCON 2025 Talk" }
    ],
    
    details: {
      duration: "2025",
      team: "IIT Gandhinagar",
      status: "Completed — contribution to ROSCON 2025 talk and research publication (under preparation)",
      tags: ["HRI", "VLA", "GR00T", "Bimanual", "Social Robotics", "LLM"]
    }
  },
  {
    id: 3,
    slug: "poultry-patrol-robot",
    title: "Poultry Patrol Robot",
    shortDesc: "An autonomous robot that detects and marks diseased chickens in poultry farms using YOLOv5 computer vision and ROS2, deployed and tested in a real chicken farm in Puttur.",
    
    fullDescription: `The Poultry Patrol Robot is an autonomous agricultural robot developed as a B.E. final year project at Sahyadri College of Engineering and Management, designed to detect and mark diseased chickens in medium-scale poultry farms.

## Problem
Manual disease detection in poultry farms is labor-intensive and prone to error. Diseases like Salmonella and Coccidiosis can spread rapidly if not detected early, causing major economic losses.

## Robot Design
Designed a differential drive mobile robot in SolidWorks (full 2D and 3D) with a fabricated chassis using aluminum sheet metal, 3D-printed PLA parts, and black acrylic panels.

## Detection System
- Raspberry Pi 5 running YOLOv5 for real-time diseased chicken detection via webcam
- Trained on labeled dataset including movement-based sick chicken detection and faecal matter analysis
- Detects Salmonella (watery/discolored faeces, weak legs) and Coccidiosis (bloody streaks in stool)
- mAP@50 achieved: ~0.9

## Actuation
- Motor control via L298N motor drivers (4x Johnson DC motors at 200 RPM)
- Servo-actuated color sprayer mechanism to autonomously mark identified diseased birds
- ESP32 for distributed sensor acquisition and wireless telemetry

## ROS2 Architecture
Built on ROS2 with dedicated nodes for image capture (/camera → /img), ML inference (/detect → /yolov5/detections), object following (/object_follower), and motor control (/cmd_vel → /move).

## Testing
Tested in a real chicken farm at Beliyurukatte, Puttur. Plagarism and AI check passed (5% similarity, DrillBit).`,

    category: ["AI/ML", "Embedded", "Vision"],
    tech: ["Python", "ROS2", "YOLOv5", "Raspberry Pi 5", "ESP32", "SolidWorks", "L298N", "OpenCV"],
    
    media: [
      {
        type: "youtube",
        url: "https://youtube.com/shorts/hFM8OZQFCnQ?feature=share",
        caption: "Poultry Patrol Robot demo"
      },
      {
        type: "youtube",
        url: "https://youtu.be/U_nt_uAjus0",
        caption: "Poultry Patrol Robot Design"
      },
      {
        type: "image",
        url: "https://drive.google.com/file/d/1d408hknNpKFARYUtFlV5sjxnRHhftlmA/view?usp=sharing",
        caption: "Poultry Patrol Robot Design"
      }
    ],
    
    metrics: {
      performance: "Real-time detection at farm",
      accuracy: "mAP@50 ~0.9",
      custom: [
        { label: "Detection Targets", value: "Salmonella, Coccidiosis" },
        { label: "Compute", value: "Raspberry Pi 5" },
        { label: "Total Cost", value: "~₹28,600" },
        { label: "Chassis", value: "Aluminium + PLA + Acrylic" }
      ]
    },
    
    featured: true,
    
    links: [
      { type: "demo", url: "https://youtube.com/shorts/YPX7rrlA688", label: "Demo Video" },
      { type: "paper", url: "https://drive.google.com/file/d/1KravVP5PikgnKBbai64hB2Cprnxagvz8/view?usp=sharing", label: "Report" }
    ],
    
    details: {
      duration: "May - December 2024",
      team: "Alfred Jeevan Dsouza, Bhavish Rai B, Nishanth Alva, Pratik Shyam Naik — guided by Mr. Suhas",
      status: "Completed — B.E. Final Year Project, VTU 2024-25",
      tags: ["YOLOv5", "ROS2", "AgriRobotics", "Raspberry Pi", "Disease Detection"]
    }
  }
];

const unstarredProjects = [
  {
    id: 4,
    slug: "home-security-system",
    title: "Automated Home Security System",
    shortDesc: "IoT-based home security system with facial recognition, real-time visitor identification using Raspberry Pi and Pi Camera, with instant Telegram bot photo notifications.",
    fullDescription: `Developed as part of the IoT Skill Lab Course at Sahyadri College (2022-23), this system combines facial recognition with ultrasonic distance sensing for real-time home security.

## How It Works
An ultrasonic sensor (HC-SR04) detects when a visitor approaches the doorstep. The Pi Camera captures an image and runs facial recognition. The distance from the doorstep is calculated and the captured image along with contextual information is sent instantly via a Telegram bot.

## Hardware
- Raspberry Pi (Raspbian OS)
- HC-SR04 Ultrasonic Distance Sensor
- Raspberry Pi Camera Module
- Relay Module
- Jumper wires

## Stack
Python, Raspberry Pi, Telegram Bot API, OpenCV`,
    category: ["Embedded", "Vision"],
    tech: ["Python", "Raspberry Pi", "OpenCV", "Telegram Bot API", "HC-SR04"],
    media: [],
    metrics: {
      performance: "Real-time visitor alerts",
      accuracy: "Facial recognition + distance estimation",
      custom: [
        { label: "Notification", value: "Telegram Bot" },
        { label: "Sensor", value: "HC-SR04 Ultrasonic" }
      ]
    },
    featured: false,
    links: [
      { type: "paper", url: "https://drive.google.com/file/d/1ylrT8EdvDLFbRH-sAwgbJo7IO-NR0Syc/view?usp=sharing", label: "Report" }
    ],
    details: {
      duration: "2022-23",
      team: "Bhavish Rai B, Charan Raj B H, Adarsha, Aniruddha Wagle K",
      status: "Completed — IoT Skill Lab Course, TCE Sahyadri",
      tags: ["IoT", "Facial Recognition", "Raspberry Pi", "Security", "Telegram"]
    }
  },
  {
    id: 5,
    slug: "helical-spring",
    title: "Design and Analysis of Helical Spring",
    shortDesc: "Designed a helical spring in SolidWorks and validated nonlinear FEA results against hand-calculated theoretical values using Wahl's correction factor, with a Python parametric analysis script.",
    fullDescription: `A mechanical design and analysis assignment from the Department of Mechanical and Robotics Engineering at Sahyadri College (Even Semester 2023-24).

## Spring Specifications
- Wire diameter: 14mm
- Mean diameter: 70mm
- Active coils: 10
- Load: 3768.7 N
- Rigidity Modulus: 79,000 MPa

## Theoretical Solution
Used Wahl's correction factor (k = 1.3105, spring index C = 5) to compute shear stress (329.89 N/mm²) and deflection (35mm).

## FEA Validation (SolidWorks Nonlinear)
- Deflection: 35.4mm (1.14% error)
- Shear stress: 397.2 MPa (22.36% error — expected due to stress concentration effects in nonlinear FEA)

## Python Parametric Analysis
Developed a script to analyze the effect of mean diameter (55-85mm) on induced shear stress, showing an inverse relationship as diameter increases.`,
    category: ["Mechanical", "Simulation"],
    tech: ["SolidWorks", "Python", "FEA", "Matplotlib"],
    media: [],
    metrics: {
      performance: "1.14% deflection error",
      accuracy: "FEA vs Theoretical validated",
      custom: [
        { label: "Load", value: "3768.7 N" },
        { label: "Spring Index", value: "5" },
        { label: "Deflection Error", value: "1.14%" }
      ]
    },
    featured: false,
    links: [
      { type: "paper", url: "https://drive.google.com/file/d/1S9o_yvCXo7H9PTYfdTZkcSfT5MQMDo2H/view?usp=sharing", label: "Report" }
    ],
    details: {
      duration: "Even Semester 2023-24",
      team: "Anujith R Shetty, Ashika Shettigar, Ashish S Talekar, Bhavish Rai B",
      status: "Completed",
      tags: ["SolidWorks", "FEA", "Spring Design", "Python", "Mechanical"]
    }
  },
  {
    id: 6,
    slug: "farm-water-pump",
    title: "Automated Farm Water Pump System",
    shortDesc: "IoT-based smart irrigation system automating water pump control based on real-time soil moisture data with Adafruit IO dashboard and IFTTT email notifications.",
    fullDescription: `Designed an IoT-based smart irrigation system for agricultural use, integrating soil moisture sensing with automated pump control and remote monitoring.

## System
- Soil moisture sensor + motor driver connected to ESP32
- Live sensor data streamed to Adafruit IO dashboard
- Event-driven email notifications via IFTTT on every pump state change
- Farmers alerted instantly without manual checking`,
    category: ["Embedded", "IoT"],
    tech: ["ESP32", "Python", "Adafruit IO", "IFTTT", "IoT"],
    media: [],
    metrics: {
      performance: "Automated pump control",
      accuracy: "Real-time soil moisture monitoring",
      custom: [
        { label: "Platform", value: "ESP32" },
        { label: "Dashboard", value: "Adafruit IO" },
        { label: "Alerts", value: "IFTTT Email" }
      ]
    },
    featured: false,
    links: [],
    details: {
      duration: "2023",
      team: "Bhavish Rai B",
      status: "Completed",
      tags: ["IoT", "ESP32", "Agriculture", "Automation", "Adafruit IO"]
    }
  },
  {
    id: 7,
    slug: "3dof-robotic-arm",
    title: "3-DOF Robotic Arm Manipulator",
    shortDesc: "Designed a 3-DOF robotic arm in SolidWorks with forward and inverse kinematics implemented for precision control and pick-and-place automation.",
    fullDescription: `Designed a 3-degree-of-freedom robotic arm manipulator in SolidWorks and developed control algorithms for pick-and-place automation.

## Work Done
- Full 3D design in SolidWorks
- Forward and inverse kinematics implementation
- Trajectory planning for pick-and-place tasks`,
    category: ["Mechanical", "Control"],
    tech: ["SolidWorks", "Python", "Kinematics"],
    media: [],
    metrics: {
      performance: "Pick-and-place automation",
      accuracy: "IK-based precision control",
      custom: [
        { label: "DOF", value: "3" },
        { label: "Design Tool", value: "SolidWorks" }
      ]
    },
    featured: false,
    links: [],
    details: {
      duration: "2024",
      team: "Bhavish Rai B",
      status: "Completed",
      tags: ["Kinematics", "SolidWorks", "Manipulator", "Pick-and-Place"]
    }
  }
];

export const allProjects = [
  ...featuredProjects,
  ...unstarredProjects
];

export const skills = {
  "ROBOTICS": [
    { name: "ROS 2", percent: 85 },
    { name: "MoveIt", percent: 70 },
    { name: "Nav2", percent: 70 },
    { name: "ros2_control", percent: 50 },
    { name: "URDF/XACRO", percent: 70 },
    { name: "RViz 2", percent: 60 },
  ],
  "PROGRAMMING": [
    { name: "Python", percent: 85 },
    { name: "C++", percent: 50 },
    { name: "C", percent: 50 },
  ],
  "TOOLS": [
    { name: "Git", percent: 80 },
    { name: "Docker", percent: 55 },
    { name: "Linux", percent: 80 },
    { name: "SSH", percent: 70 },
    { name: "VS Code", percent: 90 },
  ],
  "BOARDS": [
    { name: "ESP32", percent: 70 },
    { name: "ESP8266", percent: 70 },
    { name: "Arduino Uno", percent: 70 },
    { name: "Raspberry Pi", percent: 70 },
    { name: "NVIDIA Jetson", percent: 65 },
  ],
  "PLATFORMS": [
    { name: "TurtleBot3", percent: 90 },
    { name: "Unitree Go2", percent: 60 },
    { name: "Lerobot", percent: 70 },
  ],
  "HARDWARE": [
    { name: "3D Printing", percent: 80 },
    { name: "Laser Cutting", percent: 80 },
    { name: "Soldering", percent: 80 },
  ],
  "SIMULATION": [
    { name: "Gazebo Classic", percent: 90 },
    { name: "Ignition Fortress", percent: 85 },
  ],
  "CAD & DESIGN": [
    { name: "Solidworks", percent: 70 },
    { name: "Fusion 360", percent: 70 },
  ],
  "CONTROL": [
    { name: "PID", percent: 70 },
  ],
};
export const publications = [
  {
    id: 1,
    title: "CoMuRoS: A LLM-Driven Hierarchical Architecture for Adaptive Multi-Robot Collaboration",
    authors: "Suraj Borate, Bhavish Rai B, Vipul Pardeshi and Madhu Vadali",
    venue: "IROS 2025 LEAPRIDE Poster",
    year: 2025,
    // link: "https://openreview.net/pdf?id=a0GqX5jGDb"
    link: "https://openreview.net/forum?id=a0GqX5jGDb"
  },
  {
    id: 2,
    title: "LLM-Based Generalizable Hierarchical Task Planning and Execution for Heterogeneous Robot Teams with Event-Driven Replanning",
    authors: "Suraj Borate, Bhavish Rai B, Vipul Pardeshi and Madhu Vadali",
    venue: "ArXiv",
    year: 2025,
    link: "https://arxiv.org/pdf/2511.22354"
  },
  {
    id: 3,
    title: "Application of LLM Driven Robot Architecture for the Study of Robot Interventions in Making Task",
    authors: "Suraj Borate, Bhavish Rai B*, Megha Bansal*, Harshil Shafi, Saloni Shinde, Aditi Kothiyal and Madhu Vadali",
    venue: "Submitted to IEEE Transactions on Learning Technologies",
    year: 2026,
    // link: "https://openreview.net/forum?id=a0GqX5jGDb"
  },
  {
    id: 4,
    title: "Integrated Task and Kinodynamic Path Planning for Heterogeneous Multi-Robot Formations",
    authors: "Suraj Borate, Bhavish Rai B and Madhu Vadali",
    venue: "Accepted for ICRA 2026 Workshop (SCI-MARS)",
    // venue: "IEEE Robotics and Automation Letters (RA-L) [Under preparation]",
    year: 2026,
    // link: "https://openreview.net/forum?id=a0GqX5jGDb"
  },
];

export const talks = [
  {
    id: 1,
    title: "CoMuRoS: A ROS2 Based Package for LLM Driven Adaptive Collaborative Multi-Robot Systems",
    event: "ROSCon India2025",
    speakers: "Suraj Borate, Bhavish Rai B, Vipul Pardeshi, Madhu Vadali",
    date: "December 2025",
    // link: "https://www.youtube.com/watch?v=dA2D3FWFkds"
    link: "https://youtu.be/CIL2l_JLuAo?si=oviCFe4jaKSHHEFs"
  },
  // {
  //   id: 2,
  //   title: "Quadruped Robot Demo",
  //   event: "National Robotics Week",
  //   date: "April 2023"
  // }
];

export const patents = [
  {
    id: 1,
    title: "A Multi-Robot Coordination System for Task Planning and Execution",
    inventors: "Suraj Borate, Madhu Vadali and Bhavish Rai B",
    // applicationNumber: "IN202X0XXXXXX",
    filingDate: "07.05.2026",
    status: "Filed", // or "Published", "Granted"
    // link: "https://link-to-patent-if-available"
  }
];