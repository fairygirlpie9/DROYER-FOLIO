import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'toyota-gr-cup',
    title: 'Toyota GR Cup Dashboard',
    category: 'AI & Telemetry',
    award: 'This project won the 2025 Toyota Racing Development Award for Best in Real Time Analytics.',
    shortDescription: "This dashboard merges Toyota GR Cup's live track data, tyre deg, weather data and chassis telemetry. It provides PIT STOP windows and PUSH/DEFEND calls with an interactive display for race engineers.",
    description: `The project was inspired by the critical need for race engineers to make instant, data driven decisions in the high pressure environment of a live race. Recognising that winning often depends on the speed and accuracy of strategic calls, I aimed to transform raw telemetry data into actionable intelligence. The result is a browser based analytics tool designed for tablets, providing real time visualization of the Barber Motorsports Park circuit, tracking all cars dynamically while highlighting the selected driver.

Built using JavaScript and three.js for visualization, the dashboard integrates anonymised competition data to simulate a live feed. It features a Strategy Impact panel displaying metrics like tire degradation and competitor gaps. Crucially, it leverages custom AI models to generate immediate recommendations (e.g., PUSH) and calculate optimal pit stop windows, enhancing team performance during race day decision making.`,
    imageUrl: 'https://i.ibb.co/SD0nVCv6/blog-toyota-lux-ops.jpg',
    videoUrl: 'https://player.vimeo.com/video/1139847701',
    technologies: ['React', 'Three.js', 'Telemetry Data', 'Data Viz', 'HTML', 'CSS'],
    link: 'https://gr86strategy.netlify.app'
  },
  {
    id: 'carmen-in-madrid',
    title: 'Carmen in Madrid',
    category: 'AI & Language Learning',
    shortDescription: "An immersive language learning journal set in Madrid, featuring AI powered roleplay and pronunciation coaching.",
    description: `Traditional language textbooks often lack the emotional hooks required for long term retention. Carmen en Madrid was born from the "Comprehensible Input" philosophy, leveraging the dramatic, formulaic nature of telenovelas to cement vocabulary through "bingeable" narratives. I wanted to move away from dry exercises toward a "Modern Chic" travel aesthetic inspired by The New Yorker’s editorial illustrations, specifically targeting Millennial and Gen Z learners who value style and storytelling.

This application is an immersive, narrative driven Spanish learning experience. Users follow Carmen, a stylish woman in her 20s, through the first episode of a season full of mystery and betrayal in Madrid. The interface mimics a physical journal resting on a white desk, featuring 3D page turning animations. Beyond reading, users can listen to high emotion character specific dialogue, practice pronunciation with real time AI coaching, and explore Cultural Deep Dives into iconic Madrid locations.

I utilised a sophisticated AI Tech Stack to create a seamless experience. Custom models serve as the "Series Bible," maintaining plot logic. Generative AI powers the bilingual scripting and the multimodal pronunciation coach. ElevenLabs provides expressive, ultra realistic voices to enhance emotional immersion. Nano Banana generates consistent "New Yorker" style scene art. The frontend is built with React and TypeScript, featuring a "Smart Lookahead" audio preloader and IndexedDB caching for efficiency.`,
    imageUrl: 'https://i.ibb.co/V0rqRPf0/Carmen-In-Madrid-A-Telenovela.png',
    videoUrl: 'https://www.youtube.com/embed/zYkAKb0S74I',
    technologies: ['React', 'ElevenLabs', 'Nano Banana', 'HTML', 'CSS'],
    // No live demo link
  },
  {
    id: 'frankenstein-handheld',
    title: 'Frankenstein Handheld',
    category: '3D / Web Game',
    shortDescription: "A high stakes Frankenstein ritual game using a custom console 3D model, particles, procedural audio, and Kiro. Master the controls to bring the monster to life!",
    description: `I had wanted to make a 3d playable handset for a while. My inspiration for the Frankenstein Handheld project was a synthesis of two core ideas: the high stakes atmosphere of classic horror, and the satisfying tactile feedback of retro gaming hardware. I wanted to move beyond the traditional 2D game format and place the player directly behind a physical object, a custom console to perform a chaotic, timed ritual. This meant bridging the gap between a detailed 3D environment and quick reaction 2D gameplay.

The Frankenstein Handheld is a browser based ritual simulator disguised as a custom 3D gaming console. Players act as the Mad Scientist, interacting with the console's buttons (D Pad, A/B, Start) and the joystick to follow precise, timed, on screen surgical and electrical prompts. The game runs on a Finite State Machine (FSM) that dictates the ritual phases. Success in stabilising the monster leads to the triumphant "It's Alive!" voice payoff, rising eyebrows and exploding particles, while failure also triggers a chaotic explosion of particles, flashing red eyes, shaking bolts and a game reset.

The project was built as a "chimera" of specialised libraries, all orchestrated by a rigorous TypeScript and FSM architecture. I began by designing the physical console model in Nomad Sculpt and in Blender. This franken.glb model became the persistent, interactive environment, handled entirely by three.js. To enhance the horror theme, I created all 2D assets using Adobe Fresco, dynamically swapped based on the ritual state. The soundscape combines procedural audio generated via Tone.js with custom AI voiceovers from Suno. I used Kiro to implement all of these features and to control the animations.`,
    imageUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/055/438/datas/original.png', 
    videoUrl: 'https://player.vimeo.com/video/1143134227',
    technologies: ['Three.js', 'TypeScript', 'Kiro', 'Tone.js', 'Blender', 'HTML', 'CSS'],
    link: 'https://frankensteinhandheld.netlify.app'
  },
  {
    id: 'lux-ops',
    title: 'Lux Ops Telemetry',
    category: 'Data Viz & IoT',
    shortDescription: "Lux Ops delivers real time telemetry dashboards that transform complex sensor data into intuitive visual intelligence for motorsports teams, drone operators, and luxury estate managers.",
    description: `I designed dashboards around the principle that data should be immediately actionable, not just visible. Drawing on my background in cultural institutions and immersive experiences, I approached telemetry visualization as a storytelling problem: each dashboard guides the eye to what matters most in that moment, whether it's a critical tire pressure drop during a race or an anomaly in a drone's flight pattern.

I use bold, high contrast visuals and interfaces that remain legible under challenging conditions like bright sunlight in a pit lane or quick glances during active monitoring.

The technical architecture prioritizes real time responsiveness and modularity. Rather than building monolithic solutions, I created systems where data streams from APIs can be reconfigured for different use cases without rebuilding from scratch.

This flexibility is what allowed me to pivot the same core technology across motorsports, drone operations, and estate management. The design language stays consistent across applications: clean typography, purposeful color coding for status indicators, and layouts that scale gracefully from tablet displays to large format screens in control rooms.`,
    imageUrl: 'https://i.ibb.co/TBKx1Frf/lux-ops.jpg',
    technologies: ['React', 'TypeScript', 'Data Viz', 'APIs', 'HTML', 'CSS'],
    link: 'https://lux-ops.com/'
  },
  {
    id: 'royerfi',
    title: 'RoyerFi Digital Jukebox',
    category: 'Web Audio & AI Music',
    shortDescription: "A vibrant, neobrutalist digital jukebox featuring AI generated songs. Play tracks, adjust gain/tune with interactive knobs, and experience accessible design.",
    description: `RoyerFi is a digital jukebox featuring my AI songs made in Suno. The interface is designed using HTML, CSS, and TypeScript to create a lightweight and responsive experience. The style mirrors my portfolio website a vibrant jukebox in a neobrutalist style that is designed to be accessible and friendly.

Users can play and pause songs, toggle autoplay, and interact with the audio directly using custom built knobs to adjust gain and tuning. It also includes direct integration to email me, blending a music player with a personal touch.`,
    imageUrl: 'https://i.ibb.co/b586NYC5/royerfi.jpg',
    technologies: ['TypeScript', 'HTML', 'CSS', 'Suno AI'],
    link: 'https://royerfi.netlify.app/'
  },
  {
    id: 'fibo-bridge',
    title: 'Fibo Bridge',
    category: 'AI & 3D Tools',
    shortDescription: "A 3D lighting studio that translates virtual scene setups into FIBO images. Position lights, adjust cameras, and control professional parameters, then generate production ready shots.",
    description: `I have always been fascinated by the art of cinematography and the curved interactive LED backdrops used in shows like The Mandalorian. My goal was to create a digital bridge that connects the precision of 3D previsualization with the artistic power of high fidelity AI image generation to empower storytellers.

Fibo Bridge acts as a virtual film set where users can manually position lights, choose specific camera lenses, and adjust angles in a real time 3D environment. It takes these precise technical coordinates and translates them into descriptive natural language prompts which are then sent to Generative AI models to create photorealistic storyboards that perfectly match the user's lighting setup.

I engineered the core application using Vanilla JavaScript and TypeScript combined with Three.js to ensure a lightweight and responsive 3D viewport without the overhead of heavy frameworks. I integrated Generative AI models to translate spatial data into detailed lighting descriptions and utilised the FAL AI API to generate the final high resolution images using the BRIA 2.3 model.

One significant hurdle was accurately converting raw 3D vector coordinates from the virtual stage into natural language descriptions that the AI models could interpret correctly as specific lighting styles like Rembrandt or Butterfly lighting.`,
    imageUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/095/023/datas/original.png',
    videoUrl: 'https://player.vimeo.com/video/1146600140',
    technologies: ['Three.js', 'TypeScript', 'FAL AI', 'BRIA 2.3', 'HTML', 'CSS'],
    link: '#' 
  }
];

export const EMAIL = 'hello@danielleroyer.com';
export const PHONE = '+44 (0)7970298452';
export const SOCIAL_LINKS = {};