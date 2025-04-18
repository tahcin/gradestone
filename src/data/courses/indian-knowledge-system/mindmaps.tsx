// Mindmaps data for the Indian Knowledge System course
export const indianKnowledgeSystemMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Indian Knowledge Systems Overview Mindmap',
    content: `
![Mindmap](/images/IKS/Module1/mindmap.png)
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