// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Dish from '../../assets/images/dish.jpg'
import Mosque from '../../assets/images/mosque.jpg'
import Place from '../../assets/images/place.jpg'
import Reptile from '../../assets/images/reptile.jpg'

export const generalKnowledge: Topic = {
  topic: 'GeneralKnowledge',
  level: 'Beginner',
  totalQuestions: 40,
  totalScore: 40,
  totalTime: 60,
  questions: [
    {
      question: 'What is the name of this reptile?',
      image: Reptile,
      choices: ['Snake', 'Turtle', 'Crocodile', 'Lizard'],
      type: 'MCQs',
      correctAnswers: ['Turtle'],
      score: 1,
    },
    {
      question: 'In which country is this historical place located?',
      image: Place,
      choices: ['China', 'Greece', 'India', 'Egypt'],
      type: 'MCQs',
      correctAnswers: ['China'],
      score: 1,
    },
    {
      question: 'This is a famous Pakistani dish. What is the name of this dish?',
      image: Dish,
      choices: ['Kebab', 'Haleem', 'Paya', 'Biryani'],
      type: 'MCQs',
      correctAnswers: ['Biryani'],
      score: 1,
    },
    {
      question: 'Which famous car is this?',
      image: Car,
      choices: ['Ford', 'Toyota', 'Mercedes', 'Honda'],
      type: 'MCQs',
      correctAnswers: ['Mercedes'],
      score: 1,
    },
    {
      question: 'To which renowned automobile brand does this logo belong?',
      image: BrandLogo,
      choices: ['Audi', 'Tesla', 'BMW', 'Hyundai'],
      type: 'MCQs',
      correctAnswers: ['Tesla'],
      score: 1,
    },
    {
      question: 'Do you recognize this iconic mosque? If so, where is it situated?',
      image: Mosque,
      choices: [
        'Faisal Mosque, Islamabad',
        'Sheikh Zayed Grand Mosque, UAE',
        'Taj Mahal, India',
        'Blue Mosque, Turkey',
      ],

      type: 'MCQs',
      correctAnswers: ['Faisal Mosque, Islamabad'],
      score: 1,
    },
    {
      question: "What is the value of the mathematical constant π (pi) to two decimal places?",
      choices:[`3.14`,`3.16`,`3.18`,`3.12`],
      type: `MCQs`,
      correctAnswers:[`3.14`],
      score:1
    },
    {
      question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what type of triangle is it?",
      choices:[`Equilateral`,`Isosceles`,`Scalene`,`Right-angled`],
      type: `MCQs`,
      correctAnswers:[`Right-angled`],
      score:1
    },
    {
      question: "What is the chemical formula for hydrogen peroxide?",
      choices:[`H2O`,`H2O2`,`HO2`,`HO`],
      type: `MCQs`,
      correctAnswers:[`H2O2`],
      score:1
    },
    {
      question: "Which element has the highest atomic number on the periodic table?",
      choices:[`Uranium`,`Hydrogen`,`Oxygen`,`Plutonium`],
      type: `MCQs`,
      correctAnswers:[`Uranium`],
      score:1
    },
    {
      question: "What is the SI unit of force",
      choices:[`Newton`,`Joule`,`Watt`,`Pascal`],
      type: `MCQs`,
      correctAnswers:[`Newton`],
      score:1
    },
    {
      question: "According to Einstein's theory of relativity, what happens to time as you approach the speed of light?",
      choices:[`It slows down`,`It speeds up`,`It remains constant`,`It stops`],
      type: `MCQs`,
      correctAnswers:[`It slows down`],
      score:1
    },
    {
      question: "Which part of the cell is responsible for producing energy in the form of ATP?",
      choices:[`Nucleus`,`Mitochondria`,`Ribosome`,`Endoplasmic reticulum`],
      type: `MCQs`,
      correctAnswers:[`Mitochondria`],
      score:1
    },
    {
      question: "What is the largest organ in the human body?",
      choices:[`Heart`,`Liver`,`Skin`,`Lungs`],
      type: `MCQs`,
      correctAnswers:[`Skin`],
      score:1
    },
    {
      question: "Solve the equation 2x + 5 = 15",
      choices:[`x=5`,`x=7.5`,`x=10`,`x=6`],
      type: `MCQs`,
      correctAnswers:[`x=5`],
      score:1
    },
    {
      question: " If a rectangle has a length of 8 cm and a width of 5 cm, what is its area?",
      choices:[`13 cm²`,`20 cm²`,`26 cm²`,`40 cm²`],
      type: `MCQs`,
      correctAnswers:[`20 cm²`],
      score:1
    },
    {
      question: " What is the pH of a solution with a hydrogen ion concentration of 1 x 10^-3 M?",
      choices:[`3`,`5`,`7`,`9`],
      type: `MCQs`,
      correctAnswers:[`3`],
      score:1
    },
    {
      question: "Which gas is the most abundant in the Earth's atmosphere?",
      choices:[`Oxygen`,`Nitrogen`,`Carbon dioxide`,`Hydrogen`],
      type: `MCQs`,
      correctAnswers:[`Nitrogen`],
      score:1
    },
    {
      question: "What is the unit of electrical resistance",
      choices:[`Ohm`,`Watt`,`Ampere`,`Volt`],
      type: `MCQs`,
      correctAnswers:[`Ohm`],
      score:1
    },
    {
      question: "Which organelle is responsible for protein synthesis in a eukaryotic cell?",
      choices:[`Nucleus`,`Golgi apparatus`,`Ribosome`,`Endoplasmic reticulum`],
      type: `MCQs`,
      correctAnswers:[`Ribosome`],
      score:1
    },
    {
      question: "What is the process by which cells break down glucose to release energy",
      choices:[`Photosynthesis`,`Respiration`,`Fermentation`,`Mitosis`],
      type: `MCQs`,
      correctAnswers:[`Respiration`],
      score:1
    },
    {
      question: "Which planet in our solar system has the most substantial atmosphere?",
      choices:[`Venus`,`Jupiter`,`Saturn`,`Neptune`],
      type: `MCQs`,
      correctAnswers:[`Venus`],
      score:1
    },
    {
      question: "In classical music, which of the following instruments belongs to the brass family?",
      choices:[`Violin`,`Flute`,`Trumpet`,`Cello`],
      type: `MCQs`,
      correctAnswers:[`Trumpet`],
      score:1
    },
    {
      question: "Who is the author of the mathematical treatise Elements?",
      choices:[`Euclid`,`Pythagoras`,`Archimedes`,`Aristotle`],
      type: `MCQs`,
      correctAnswers:[`Euclid`],
      score:1
    },
    {
      question: "What is the chemical symbol for the element iodine",
      choices:[`I`,`Io`,`In`,`Id`],
      type: `MCQs`,
      correctAnswers:[`I`],
      score:1
    },
    {
      question: "In quantum mechanics, what does Schrödinger's equation describe?",
      choices:[`Electron orbits`,`Wave-particle duality`,`Quantum entanglement`,`Photon behavior`],
      type: `MCQs`,
      correctAnswers:[`Wave-particle duality`],
      score:1
    },
    {
      question: "Which of the following is a halogen element?",
      choices:[`Sodium(Na)`,`Chlorine(Cl)`,`Calcium(Ca)`,`Iron(Fe)`],
      type: `MCQs`,
      correctAnswers:[`Chlorine(Cl)`],
      score:1
    },
    {
      question: "What is the main function of the Golgi apparatus in a cell?",
      choices:[`Energy production`,`Protein synthesis`,`Cellular respiration`,`Modification and packaging of proteins`],
      type: `MCQs`,
      correctAnswers:[`Modification and packaging of proteins`],
      score:1
    },
    {
      question: "Who developed the theory of general relativity?",
      choices:[`Isaac Newton`,`Albert Einstein`,`Max  Planck`,`Niels Bohr`],
      type: `MCQs`,
      correctAnswers:[`Albert Einstein`],
      score:1
    },
    {
      question: "Which ancient civilization is credited with the invention of the wheel?",
      choices:[`Mesopotamia`,`Egypt`,`Indus Valley`,`China`],
      type: `MCQs`,
      correctAnswers:[`Mesopotamia`],
      score:1
    },
    {
      question: "What is the primary neurotransmitter associated with pleasure and reward in the brain?",
      choices:[`Dopamine`,`Serotonin`,`Acetylcholine`,`GABA (Gamma-aminobutyric acid)`],
      type: `MCQs`,
      correctAnswers:[`Dopamine`],
      score:1
    },
    {
      question: "What is the primary greenhouse gas responsible for climate change?",
      choices:[`Carbon dioxide (CO2)`,`Methane (CH4)`,`Nitrous oxide (N2O)`,`Ozone (O3)`],
      type: `MCQs`,
      correctAnswers:[`Carbon dioxide (CO2)`],
      score:1
    },
    {
      question: "Which element has the chemical symbol (Pt)",
      choices:[`Platinum`,`Palladium`,`Potassium`,`Phosphorus`],
      type: `MCQs`,
      correctAnswers:[`Platinum`],
      score:1
    },
    {
      question: "Who proposed the uncertainty principle in quantum mechanics?",
      choices:[`Max Planck`,`Werner Heisenberg`,`Erwin Schrodinger`,`Niels Bohr`],
      type: `MCQs`,
      correctAnswers:[`Werner Heisenberg`],
      score:1
    },
    {
      question: "Solve the equation 2x + 5 =15",
      choices:[`x=5`,`x= 7.5`,`x= 10`,`x= 6`],
      type: `MCQs`,
      correctAnswers:[`x= 5`],
      score:1
    },
    {
      question: "if a rectangle has a length of 8 cm and a width of 5 cm, what is its area? ",
      choices:[`13 cm²`,`20 cm²`,`26 cm²`,`40 cm²`],
      type: `MCQs`,
      correctAnswers:[`20 cm²`],
      score:1
    },
    {
      question: "What's the capital city",
      choices:[],
      type: `MCQs`,
      correctAnswers:[``],
      score:1
    },
    {
      question: "What's the capital city",
      choices:[],
      type: `MCQs`,
      correctAnswers:[``],
      score:1
    },
    {
      question: "What's the capital city",
      choices:[],
      type: `MCQs`,
      correctAnswers:[``],
      score:1
    },
    {
      question: "What's the capital city",
      choices:[],
      type: `MCQs`,
      correctAnswers:[``],
      score:1
    },
  ],
}
