// Mindmaps data for the Indian Knowledge System course
export const indianKnowledgeSystemMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Indian Knowledge Systems Overview Mindmap',
    content: `
# Indian Knowledge Systems Overview Mindmap

## Philosophical Systems

- **Vedanta**
  - Advaita (Non-dualism)
  - Dvaita (Dualism)
  - Vishishtadvaita (Qualified non-dualism)
  - Brahman and Atman concepts
  - Moksha (Liberation)

- **Nyaya-Vaisheshika**
  - Logic and epistemology
  - Categories of reality
  - Atomic theory
  - Inference methods
  - Valid knowledge sources

- **Samkhya-Yoga**
  - Purusha (Consciousness)
  - Prakriti (Matter)
  - Three Gunas
  - Eight limbs of yoga
  - Mind-body relationship

- **Mimamsa**
  - Vedic interpretation
  - Ritual analysis
  - Dharma concept
  - Self-validity of knowledge

## Traditional Sciences

- **Ayurveda**
  - Tridosha theory
  - Panchamahabhuta
  - Preventive healthcare
  - Herbal medicine
  - Surgical techniques

- **Jyotisha (Astronomy)**
  - Planetary movements
  - Calendar systems
  - Nakshatras (Constellations)
  - Mathematical models
  - Time calculation

- **Ganita (Mathematics)**
  - Zero concept
  - Decimal system
  - Algebra (Bija-ganita)
  - Geometry (Rekha-ganita)
  - Infinity concept

- **Vastu Shastra**
  - Architectural principles
  - Spatial harmony
  - Directional significance
  - Natural elements integration
  - Energy flow concepts

## Knowledge Transmission

- **Guru-Shishya Parampara**
  - Teacher-student relationship
  - Oral tradition
  - Experiential learning
  - Character development
  - Disciplined study

- **Textual Traditions**
  - Shruti (Revealed texts)
  - Smriti (Remembered texts)
  - Commentaries (Bhashyas)
  - Sutras (Aphorisms)
  - Shastras (Specialized texts)

- **Learning Methods**
  - Shravanam (Listening)
  - Mananam (Reflection)
  - Nididhyasanam (Meditation)
  - Tarka (Debate)
  - Anubhava (Experience)
    `
  },
  
  // Module 2, Lesson 3
  '2-3': {
    title: 'Ancient Indian Scientific Contributions Mindmap',
    content: `
# Ancient Indian Scientific Contributions Mindmap

## Mathematics

- **Numerical System**
  - Place value notation
  - Zero concept
  - Decimal system
  - Infinity understanding
  - Large number nomenclature

- **Algebra**
  - Quadratic equations
  - Indeterminate equations
  - Diophantine problems
  - Aryabhata's methods
  - Bhaskara's contributions

- **Geometry**
  - Sulba Sutras
  - Pythagorean theorem precursors
  - Circle measurements
  - Geometric constructions
  - Trigonometric functions

- **Calculus Precursors**
  - Infinite series
  - Kerala School contributions
  - Madhava's series
  - Astronomical applications
  - Approximation methods

## Astronomy

- **Cosmological Models**
  - Heliocentric concepts
  - Planetary motions
  - Eclipse calculations
  - Astronomical instruments
  - Star catalogs

- **Time Measurement**
  - Panchanga (Calendar)
  - Lunar months
  - Solar year
  - Yugas (Time cycles)
  - Day divisions

- **Notable Astronomers**
  - Aryabhata
  - Varahamihira
  - Brahmagupta
  - Bhaskara II
  - Nilakantha Somayaji

## Metallurgy

- **Iron Technology**
  - Delhi Iron Pillar
  - Rust-resistant iron
  - Wootz steel
  - Forge techniques
  - Alloying methods

- **Other Metals**
  - Gold purification
  - Silver extraction
  - Copper working
  - Bronze casting
  - Zinc distillation

## Medicine

- **Surgical Techniques**
  - Sushruta's methods
  - Plastic surgery origins
  - Cataract procedures
  - Surgical instruments
  - Anatomical knowledge

- **Pharmacology**
  - Herbal formulations
  - Mineral medicines
  - Dosage principles
  - Drug classification
  - Preparation methods

- **Diagnostic Methods**
  - Pulse examination
  - Physical observation
  - Patient history
  - Disease classification
  - Prognosis techniques
    `
  }
};

// Function to get a specific mindmap
export function getMindmap(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return indianKnowledgeSystemMindmaps[key as keyof typeof indianKnowledgeSystemMindmaps] || null;
}