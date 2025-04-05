// Notes data for the Indian Knowledge System course
export const indianKnowledgeSystemNotes = {
  // Module 1, Lesson 1
  '1-1': {
    title: 'Introduction to Indian Knowledge Systems',
    content: `
# Introduction to Indian Knowledge Systems

## What are Indian Knowledge Systems?
Indian Knowledge Systems (IKS) refer to the diverse body of knowledge, theories, and practices that originated in the Indian subcontinent over thousands of years. These systems encompass various disciplines including philosophy, mathematics, astronomy, medicine, architecture, arts, and more.

![Ancient Indian manuscript](https://images.unsplash.com/photo-1585213733358-2a9f3e4fbf20?auto=format&fit=crop&q=80&w=1000)

## Historical Context and Evolution

### Ancient Period (3000 BCE - 500 CE)
The foundations of Indian knowledge systems were laid during this period with the composition of:
- **Vedas**: The oldest texts containing knowledge on rituals, philosophy, and cosmic principles
- **Upanishads**: Philosophical texts exploring metaphysical concepts
- **Arthashastra**: Treatise on statecraft, economic policy, and military strategy
- **Early scientific texts**: Works on mathematics, astronomy, and medicine

### Medieval Period (500 CE - 1500 CE)
This period saw significant developments in:
- Mathematical innovations by scholars like Aryabhata and Bhaskara
- Medical compilations by Vagbhata and others
- Philosophical schools and debates
- Architectural and artistic traditions

### Colonial and Modern Period (1500 CE - Present)
- Impact of colonization on traditional knowledge systems
- Revival and reinterpretation of traditional knowledge
- Integration with modern scientific frameworks
- Contemporary relevance and applications

![Modern interpretation of traditional knowledge](https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=1000)

## Core Principles of Indian Knowledge Systems

### Holistic Approach
Indian knowledge systems typically embrace a holistic worldview that:
- Recognizes interconnections between different domains of knowledge
- Integrates theoretical understanding with practical applications
- Considers the relationship between the individual, society, and nature

### Experiential Learning
- Emphasis on direct experience and observation
- Guru-shishya parampara (teacher-student tradition)
- Practical application of theoretical knowledge

### Ethical Framework
- Knowledge linked to ethical conduct and values
- Concept of dharma (righteousness, duty) as a guiding principle
- Balance between individual growth and social responsibility

## Major Domains of Indian Knowledge Systems

### Philosophy and Metaphysics
\`\`\`
Major philosophical schools:
1. Vedanta (Advaita, Dvaita, Vishishtadvaita)
2. Samkhya
3. Yoga
4. Nyaya
5. Vaisheshika
6. Mimamsa
7. Buddhist philosophical traditions
8. Jain philosophical traditions
\`\`\`

Key concepts include:
- **Consciousness and reality**: Theories about the nature of existence
- **Epistemology**: Valid means of knowledge (pramanas)
- **Logic and reasoning**: Structured systems of argumentation

![Philosophical contemplation](https://images.unsplash.com/photo-1470164971321-224e93e7118b?auto=format&fit=crop&q=80&w=1000)

### Mathematics and Astronomy

#### Mathematical Innovations
- **Number system**: Development of zero and decimal place value system
- **Algebra**: Equations, quadratics, and indeterminate equations
- **Geometry**: Theorems on triangles, circles, and other shapes
- **Trigonometry**: Sine tables and functions

#### Astronomical Achievements
- **Planetary models**: Calculations of planetary positions
- **Astronomical instruments**: Tools for celestial observations
- **Calendrical systems**: Precise timekeeping methods
- **Eclipse predictions**: Methods for calculating solar and lunar eclipses

### Medicine and Healthcare (Ayurveda)

#### Principles of Ayurveda
- **Tridosha theory**: Vata, Pitta, and Kapha as fundamental bodily energies
- **Panchamahabhuta**: Five elements theory (earth, water, fire, air, space)
- **Preventive approach**: Focus on lifestyle, diet, and daily routines

#### Medical Practices
- **Diagnosis methods**: Pulse examination, observation, questioning
- **Treatment modalities**: Herbs, minerals, diet, lifestyle modifications
- **Surgical procedures**: Described in texts like Sushruta Samhita
- **Rejuvenation therapies**: Rasayana and Panchakarma

![Ayurvedic herbs and preparations](https://images.unsplash.com/photo-1512675828443-4f454c42253a?auto=format&fit=crop&q=80&w=1000)

### Architecture and Vastu Shastra

#### Architectural Traditions
- **Temple architecture**: Nagara, Dravida, and Vesara styles
- **Secular buildings**: Palaces, step-wells, and residential structures
- **Town planning**: Grid patterns and zoning in ancient cities

#### Principles of Vastu Shastra
- **Directional significance**: Importance of cardinal directions
- **Spatial harmony**: Proportions and measurements
- **Environmental considerations**: Alignment with natural elements

### Arts and Aesthetics

#### Literary Traditions
- **Sanskrit literature**: Poetry, drama, and prose
- **Regional literatures**: Development of various language traditions
- **Poetics**: Theories of literary composition and appreciation

#### Performing Arts
- **Music**: Raga system, instruments, and vocal traditions
- **Dance**: Classical forms like Bharatanatyam, Kathak, Odissi
- **Drama**: Theatrical traditions and Natya Shastra principles

#### Visual Arts
- **Painting**: Miniature traditions, murals, and folk styles
- **Sculpture**: Temple sculptures, bronze casting, terracotta
- **Decorative arts**: Textiles, pottery, and metalwork

![Classical Indian dance form](https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?auto=format&fit=crop&q=80&w=1000)

## Contemporary Relevance of Indian Knowledge Systems

### Integration with Modern Science
- **Research on Ayurvedic formulations**: Scientific validation of traditional medicines
- **Mathematical contributions**: Algorithms and computational methods
- **Sustainable practices**: Traditional ecological knowledge

### Educational Applications
- **Pedagogical approaches**: Experiential and holistic learning methods
- **Value education**: Ethical frameworks for personal development
- **Interdisciplinary perspectives**: Bridging humanities and sciences

### Global Impact and Recognition
- **Yoga and meditation**: Worldwide adoption for health and wellness
- **Ayurveda**: Growing interest in traditional healthcare approaches
- **Philosophical concepts**: Influence on global intellectual traditions

## Challenges and Opportunities

### Challenges in Studying IKS
- **Textual preservation**: Many ancient texts lost or fragmented
- **Colonial disruption**: Impact of colonial policies on knowledge transmission
- **Methodological issues**: Balancing traditional and modern approaches

### Opportunities for Future Development
- **Interdisciplinary research**: Collaboration across academic disciplines
- **Digital preservation**: Documentation and accessibility of knowledge
- **Innovative applications**: Adapting traditional knowledge for contemporary challenges

![Modern research on traditional knowledge](https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1000)

## Conclusion
Indian Knowledge Systems represent a rich intellectual heritage that continues to offer valuable insights across various domains. By understanding these traditions in their historical context while exploring their contemporary relevance, we can appreciate their contributions to human knowledge and their potential for addressing current global challenges. The study of IKS encourages a holistic, interdisciplinary approach that bridges the past and present, theory and practice, and different cultural perspectives.
`
  },
};  


// Function to get a specific note by module and lesson ID
export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return indianKnowledgeSystemNotes[key as keyof typeof indianKnowledgeSystemNotes];
}