// Mindmaps data for the Principles of Microeconomics course
export const principlesOfMicroeconomicsMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Microeconomics Concepts Mindmap',
    content: `
# Microeconomics Concepts Mindmap

## Core Economic Concepts

- **Scarcity**
  - Limited resources
  - Unlimited wants
  - Necessity of choice

- **Opportunity Cost**
  - Value of next best alternative
  - Implicit costs
  - Explicit costs

- **Marginal Analysis**
  - Incremental decision making
  - Marginal benefit vs. marginal cost
  - Rational decision point

## Market Structures

- **Perfect Competition**
  - Many buyers and sellers
  - Homogeneous products
  - Price takers
  - Free entry and exit
  - Perfect information

- **Monopoly**
  - Single seller
  - Unique product
  - Price maker
  - Barriers to entry
  - Profit maximization: MR = MC

- **Oligopoly**
  - Few dominant firms
  - Strategic interdependence
  - Game theory applications
  - Barriers to entry

- **Monopolistic Competition**
  - Many sellers
  - Differentiated products
  - Some price control
  - Free entry and exit

## Supply and Demand

- **Demand**
  - Law of demand
  - Demand curve
  - Factors affecting demand:
    - Income
    - Preferences
    - Prices of related goods
    - Expectations
    - Number of buyers

- **Supply**
  - Law of supply
  - Supply curve
  - Factors affecting supply:
    - Technology
    - Input prices
    - Expectations
    - Number of sellers
    - Taxes and subsidies

- **Market Equilibrium**
  - Equilibrium price
  - Equilibrium quantity
  - Surplus and shortage
  - Price ceiling and floor effects

## Consumer Theory

- **Utility**
  - Total utility
  - Marginal utility
  - Diminishing marginal utility

- **Consumer Choice**
  - Budget constraint
  - Indifference curves
  - Utility maximization

- **Elasticity**
  - Price elasticity of demand
  - Income elasticity
  - Cross-price elasticity
  - Elastic vs. inelastic

## Production Theory

- **Production Function**
  - Inputs and outputs
  - Short-run vs. long-run
  - Fixed vs. variable factors

- **Cost Curves**
  - Fixed costs
  - Variable costs
  - Total costs
  - Marginal costs
  - Average costs

- **Profit Maximization**
  - MR = MC rule
  - Short-run decisions
  - Long-run decisions
  - Shutdown conditions
    `
  },
  
  // Module 2, Lesson 3
  '2-3': {
    title: 'Market Structures Mindmap',
    content: `
# Market Structures Mindmap

## Perfect Competition

- **Characteristics**
  - Many small firms
  - Identical products
  - Price takers
  - Free entry/exit
  - Perfect information

- **Firm Behavior**
  - Price = Marginal Revenue
  - Profit maximization at P = MC
  - Zero economic profit in long run
  - Allocative efficiency
  - Productive efficiency

- **Market Supply**
  - Horizontal sum of firm supply curves
  - Short-run vs. long-run supply

## Monopoly

- **Characteristics**
  - Single seller
  - No close substitutes
  - Price maker
  - Barriers to entry

- **Sources of Monopoly Power**
  - Government franchise
  - Control of resources
  - Patents and copyrights
  - Network externalities

- **Profit Maximization**
  - MR < Price
  - MR = MC
  - Price > MC
  - Deadweight loss

- **Price Discrimination**
  - First-degree (perfect)
  - Second-degree (quantity)
  - Third-degree (group)

## Monopolistic Competition

- **Characteristics**
  - Many firms
  - Differentiated products
  - Some price control
  - Free entry/exit

- **Short Run vs. Long Run**
  - Possible economic profit in short run
  - Zero economic profit in long run
  - Excess capacity

- **Non-price Competition**
  - Product differentiation
  - Advertising
  - Location
  - Brand loyalty

## Oligopoly

- **Characteristics**
  - Few dominant firms
  - Homogeneous or differentiated products
  - Barriers to entry
  - Strategic interdependence

- **Models**
  - Cournot (quantity competition)
  - Bertrand (price competition)
  - Stackelberg (leader-follower)
  - Kinked demand curve

- **Strategic Behavior**
  - Game theory
  - Nash equilibrium
  - Collusion and cartels
  - Price leadership

- **Market Outcomes**
  - Prices above competitive level
  - Economic profits possible
  - Inefficient output levels

## Comparison of Market Structures

- **Market Power**
  - Perfect Competition: None
  - Monopolistic Competition: Low
  - Oligopoly: Moderate to High
  - Monopoly: Highest

- **Efficiency**
  - Perfect Competition: Most efficient
  - Monopolistic Competition: Some inefficiency
  - Oligopoly: Significant inefficiency
  - Monopoly: Most inefficient

- **Innovation**
  - Perfect Competition: Limited incentive
  - Monopolistic Competition: Moderate incentive
  - Oligopoly: Strong incentive
  - Monopoly: Variable (high profits but low pressure)
    `
  }
};

// Function to get a specific mindmap
export function getMindmap(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return principlesOfMicroeconomicsMindmaps[key as keyof typeof principlesOfMicroeconomicsMindmaps] || null;
}