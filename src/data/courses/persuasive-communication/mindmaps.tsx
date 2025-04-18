// Mindmaps data for the Persuasive Communication course
export const persuasiveCommunicationMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Persuasive Communication Fundamentals Mindmap',
    content: `
# Persuasive Communication Fundamentals Mindmap

## Core Elements of Persuasion

- **Ethos (Credibility)**
  - Personal character
  - Expertise
  - Authority
  - Trustworthiness
  - Professional appearance

- **Pathos (Emotional Appeal)**
  - Understanding audience emotions
  - Storytelling
  - Empathy
  - Emotional triggers
  - Inspirational messages

- **Logos (Logical Appeal)**
  - Facts and figures
  - Statistical data
  - Logical arguments
  - Evidence-based reasoning
  - Clear structure

## Communication Channels

- **Verbal Communication**
  - Word choice
  - Tone of voice
  - Pace and rhythm
  - Language clarity
  - Rhetorical devices

- **Non-verbal Communication**
  - Body language
  - Facial expressions
  - Eye contact
  - Gestures
  - Spatial awareness

- **Written Communication**
  - Structure
  - Style
  - Clarity
  - Format
  - Medium selection

## Audience Analysis

- **Demographics**
  - Age groups
  - Cultural background
  - Education level
  - Professional status
  - Geographic location

- **Psychographics**
  - Values
  - Beliefs
  - Attitudes
  - Interests
  - Lifestyle

- **Context**
  - Setting
  - Timing
  - Prior knowledge
  - Expectations
  - Potential barriers
    `
  },
  
  // Module 2, Lesson 3
  '2-3': {
    title: 'Advanced Persuasion Techniques Mindmap',
    content: `
# Advanced Persuasion Techniques Mindmap

## Persuasion Strategies

- **Social Proof**
  - Testimonials
  - Case studies
  - Statistics
  - Expert opinions
  - Peer influence

- **Reciprocity**
  - Value exchange
  - Mutual benefit
  - Giving first
  - Building relationships
  - Follow-up strategies

- **Scarcity**
  - Limited time offers
  - Exclusive access
  - Unique opportunities
  - Urgency creation
  - FOMO triggers

## Message Framing

- **Positive Framing**
  - Benefits emphasis
  - Opportunity focus
  - Gain perspective
  - Solution-oriented
  - Optimistic tone

- **Negative Framing**
  - Loss aversion
  - Problem focus
  - Risk emphasis
  - Consequence awareness
  - Cautionary tone

- **Neutral Framing**
  - Balanced perspective
  - Objective analysis
  - Fact-based
  - Unbiased presentation
  - Multiple viewpoints

## Advanced Techniques

- **Cognitive Biases**
  - Anchoring
  - Confirmation bias
  - Bandwagon effect
  - Availability heuristic
  - Status quo bias

- **Neuro-Linguistic Programming**
  - Rapport building
  - Mirroring
  - Language patterns
  - Sensory awareness
  - Behavioral flexibility

- **Psychological Triggers**
  - Authority
  - Commitment
  - Consistency
  - Contrast
  - Unity
    `
  }
};

// Function to get mindmap data based on moduleId and mindmapId
export function getMindmap(moduleId: number, mindmapId: number) {
  const key = `${moduleId}-${mindmapId}`;
  return persuasiveCommunicationMindmaps[key as keyof typeof persuasiveCommunicationMindmaps] || null;
}