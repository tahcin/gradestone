export const bseNotes: { [key: string]: { title: string; content: string } } = {

'1-1':{
    title: 'Descriptive Statistics',
    content: `
# Core Concepts

*   Descriptive statistics provides tools to summarize and describe data using numerical measures and visualizations, aiding decision-making.
*   The type of data (qualitative vs. quantitative; nominal, ordinal, interval, ratio) dictates the appropriate statistical methods and visualization techniques.
*   Data visualization techniques like frequency distributions, bar charts, histograms, and scatter plots help reveal patterns and relationships within data.
*   Numerical summaries include measures of central tendency (mean, median, mode) to locate the center of the data and measures of dispersion (range, variance, standard deviation) to quantify its spread.
*   Basic probability concepts provide a framework for understanding and quantifying uncertainty, which is essential for business forecasting and decision-making.

# Definitions of Key Terms

*   **Statistics:** Can refer to numerical facts (e.g., average, percentage) computed from data or the science/art of collecting, analyzing, presenting, and interpreting data.
*   **Descriptive Statistics:** Methods involving organizing, summarizing, and presenting data in an informative way, using numerical measures and graphical tools.
*   **Elements:** The entities on which data are collected (e.g., customers, companies, households).
*   **Variable:** A characteristic of interest for the elements (e.g., age, income, satisfaction level).
*   **Observation:** The set of measurements obtained for a particular element across all variables.
*   **Qualitative Data:** Data represented by labels or names, identifying categories (numeric or non-numeric).
*   **Quantitative Data:** Data represented by numerical values indicating "how much" or "how many".
*   **Cross-Sectional Data:** Data collected at approximately the same point in time.
*   **Time Series Data:** Data collected over several time periods.
*   **Random Experiment:** A process that generates well-defined outcomes (e.g., rolling a die).
*   **Sample Space:** The set of all possible outcomes of a random experiment.
*   **Event:** A collection (subset) of outcomes from the sample space.
*   **Probability:** A numerical measure of the likelihood that an event will occur, ranging from 0 to 1.

# Introduction to Descriptive Statistics

## Introduction - Definition
The practice of using numerical and graphical methods to describe, summarize, and present collected data effectively for interpretation and decision-making.

## Introduction - Key Insights
*   Statistics serves dual roles: as computed numerical facts and as a systematic process.
*   This process involves collecting, analyzing, presenting, and interpreting data – considered both a science and an art.
*   This module lays the groundwork for subsequent modules by covering fundamental data types, visualization, numerical summaries, and probability.

# Types of Data

## Types of Data - Definition
The classification of data based on its nature and measurement properties, which influences the choice of statistical analysis and visualization methods.

## Types of Data - Key Insights
*   Data can be broadly categorized as Qualitative or Quantitative.
*   Data can also be classified based on the time dimension: Cross-Sectional or Time Series.
*   The method of data collection (Observational vs. Experimental study) is another important consideration, with experimental studies often involving controlled conditions.

## Types of Data - Examples
*   **Qualitative:**
    *   **Nominal:** Gender (Male/Female), Brand (Apple/Samsung), Operating System (Windows/MacOS/Linux). Categories have no inherent order.
    *   **Ordinal:** Satisfaction Rating (Low/Medium/High), RAM Size (16GB/32GB/64GB). Categories have a meaningful order, but intervals between them may not be equal.
*   **Quantitative:**
    *   **Interval:** Test Scores (e.g., SAT scores), Temperature in Celsius/Fahrenheit, GPA (e.g., on a 2-10 scale). Ordered values with meaningful intervals, but no true zero point (0 does not mean absence). Ratios are not meaningful (e.g., 80F is not twice as hot as 40F).
    *   **Ratio:** Age, Salary, Price, Square Footage, Number of Bathrooms. Ordered values, meaningful intervals, and a true zero point (0 means absence of the quantity). Ratios are meaningful (e.g., $100K salary is twice $50K).
*   **Cross-Sectional:** Survey results of customer satisfaction collected in December.
*   **Time Series:** Monthly sales figures recorded over the past two years.

## Types of Data - Comparisons
*   **Qualitative vs. Quantitative:** Qualitative describes categories; Quantitative describes amounts or counts.
*   **Nominal vs. Ordinal:** Both are categorical. Nominal has no order; Ordinal has a meaningful order.
*   **Interval vs. Ratio:** Both are quantitative with meaningful intervals. Interval lacks a true zero; Ratio has a true zero, allowing for meaningful ratio comparisons.

# Data Visualization

## Data Visualization - Definition
The use of tabular summaries (like frequency distributions) and graphical representations (like charts and plots) to explore, understand, and communicate insights from data.

## Data Visualization - Key Insights
*   Frequency distributions tabulate how often values occur within defined categories or classes.
*   Relative and percent frequencies provide proportional views of the distribution.
*   Bar charts and pie charts are common for categorical data; bar charts are often preferred for easier comparison.
*   Histograms (for quantitative data) require careful definition of class intervals (typically 5-10 equal-width classes). The shape of a histogram reveals the data's distribution.
*   Scatter plots are used to visualize the relationship between two quantitative variables.
*   Data dashboards consolidate multiple visualizations for monitoring performance and facilitating decisions.

## Data Visualization - Examples
*   **Tabular:** Frequency Distribution, Relative Frequency Distribution, Percent Frequency Distribution.
*   **Graphical (Categorical):** Bar Chart, Pie Chart, Side-by-Side Bar Chart, Stacked Bar Chart.
*   **Graphical (Quantitative):** Histogram, Scatter Plot.

## Data Visualization - Formula
*   **Relative Frequency:** \`Relative Frequency = Frequency of the Class / Total Number of Observations\`
*   **Percent Frequency:** \`Percent Frequency = Relative Frequency * 100\`

# Measures of Central Tendency

## Measures of Central Tendency - Definition
Numerical values that describe the typical or central value around which data points tend to cluster.

## Measures of Central Tendency - Key Insights
*   The mean is sensitive to extreme values (outliers), while the median is robust to them.
*   The mode identifies the most common value(s) and can be used for categorical data.
*   Percentiles and quartiles provide information about the position of values within the distribution. The median is the 50th percentile (Q2).

## Measures of Central Tendency - Examples
*   **Mean:** The arithmetic average.
*   **Median:** The middle value in an ordered dataset.
*   **Mode:** The most frequent value(s).
*   **Percentiles:** The $p^{th}$ percentile is the value below which approximately $p$% of observations fall.
*   **Quartiles:** Q1 (25th percentile), Q2 (50th percentile/Median), Q3 (75th percentile).

## Measures of Central Tendency - Comparisons
*   **Mean vs. Median:** The mean uses all data values and is affected by outliers. The median depends only on the middle value(s) and is less affected by outliers, making it preferable for skewed distributions.

## Measures of Central Tendency - Formula
*   **Sample Mean ($\\bar{x}$):** $\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}$ (where $x_i$ are observations and $n$ is sample size)
*   **Population Mean ($\\mu$):** $\\mu = \\frac{\\sum_{i=1}^{N} x_i}{N}$ (where $N$ is population size)

# Measures of Dispersion

## Measures of Dispersion - Definition
Numerical values that quantify the amount of variability, spread, or scatter within a dataset.

## Measures of Dispersion - Key Insights
*   Range is simple but only uses two data points.
*   Variance and Standard Deviation measure the typical deviation from the mean. Standard Deviation is preferred as it's in the original data units.
*   IQR measures the spread of the middle 50% of the data and is resistant to outliers.
*   Coefficient of Variation allows comparison of variability between datasets with different means or units.
*   Z-scores standardize data, indicating how many standard deviations an observation is from the mean, useful for comparing relative positions and identifying outliers.

## Measures of Dispersion - Examples
*   **Range:** Difference between maximum and minimum values.
*   **Variance:** Average of squared deviations from the mean.
*   **Standard Deviation:** Square root of variance.
*   **Interquartile Range (IQR):** Q3 - Q1.
*   **Coefficient of Variation:** Ratio of standard deviation to the mean (as a percentage).
*   **Z-score:** Standardized value measuring distance from the mean in standard deviation units.

## Measures of Dispersion - Formula
*   **Range:** Range = Maximum Value - Minimum Value
*   **Sample Variance ($s^2$):** $s^2 =   \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n-1}$
*   **Sample Standard Deviation ($s$):** $s =   \\sqrt{s^2}$
*   **Interquartile Range (IQR):**   IQR = Q3 - Q1
*   **Coefficient of Variation (CV):**   $ CV = (s / \\bar{x}) * 100\\% $
*   **Z-score:**   $ z = (x_i - \\bar{x}) / s $ (for a sample observation $x_i$)

# Five Number Summary and Box Plot

## Five Number Summary and Box Plot - Definition
A method combining a concise numerical summary with a graphical representation to describe key features of a distribution.

## Five Number Summary and Box Plot - Key Insights
*   The five number summary includes: Minimum, Q1, Median (Q2), Q3, Maximum.
*   A Box Plot (or Box and Whisker Plot) visually displays the five number summary.
*   The box represents the IQR (Q1 to Q3), the line inside the box is the median.
*   Whiskers typically extend to the minimum/maximum values within a certain range (e.g., 1.5 * IQR) or to the actual min/max if no outliers are detected beyond that range.
*   Box plots effectively show centrality (median), spread (IQR, range), skewness (median position within the box, whisker lengths), and potential outliers (points beyond the whiskers).

## Five Number Summary and Box Plot - Examples
*   **Five Number Summary:** {Min, Q1, Median, Q3, Max}
*   **Graphical:** Box Plot

# Descriptive Statistics Using Analysis ToolPak

## Descriptive Statistics Using Analysis ToolPak - Definition
Leveraging the Data Analysis add-in in Microsoft Excel to efficiently compute a range of descriptive statistics for a dataset.

## Descriptive Statistics Using Analysis ToolPak - Key Insights
*   Provides a quick and automated way to obtain key summary statistics.
*   Output includes measures like Mean, Median, Mode, Standard Deviation, Variance, Range, Min, Max, Sum, Count, etc.

# Basic Probability 

## Basic Probability - Definition
The branch of mathematics concerned with analyzing random phenomena and quantifying the likelihood of events occurring.

## Basic Probability - Key Insights
*   Foundation for statistical inference and decision-making under uncertainty.
*   Involves understanding random experiments, sample spaces, and events.
*   Basic probability rules: $0 \\le P(E) \\le 1$ for any event E; Sum of probabilities for all possible outcomes in the sample space equals 1.
*   Concepts like union (A or B) and intersection (A and B) describe relationships between events.
*   Conditional probability ($P(A|B)$) assesses the likelihood of event A given that event B has occurred.
*   Bayes' Theorem provides a systematic way to update probabilities based on new evidence.
*   The Law of Total Probability calculates the probability of an event by considering all mutually exclusive scenarios leading to it.

## Basic Probability - Examples
*   Determining the probability of getting a certain number when rolling a die (Random Experiment, Outcome, Sample Space).
*   Calculating the probability of drawing a specific card from a deck (Event).
*   Assessing the probability of a project succeeding given favorable market research (Conditional Probability).
*   Updating the likelihood of a customer defaulting based on their payment history (Bayes' Theorem application, e.g., spam filters).

## Basic Probability - Formula
*   **Conditional Probability:** $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (assuming $P(B) > 0$)
*   **Law of Total Probability:** $P(A) = \\sum_{i} P(A|B_i)P(B_i)$ (where $B_i$ are mutually exclusive and collectively exhaustive events)

# Conclusion

Module 1 establishes the crucial role of descriptive statistics in business. It introduces methods for organizing data (types of data), summarizing it visually (data visualization), and numerically describing its central tendency and dispersion. Understanding these descriptive techniques, along with the fundamental concepts of probability, provides entrepreneurs with the essential tools to interpret data effectively and make more informed decisions in the face of uncertainty, setting the stage for more advanced statistical analysis in subsequent modules.
    `
},
'2-1':{
    title: 'Random Variables and Discrete Probability Distributions',
    content: `
# Core Concepts

*   **Random Variables:** Quantify outcomes of random phenomena, mapping them to numerical values.
*   **Probability Distributions:** Describe the likelihood of each possible value for a random variable using Probability Mass Functions (PMF) or Cumulative Distribution Functions (CDF).
*   **Key Characteristics:** Expectation (mean) and Variance (spread) summarize the central tendency and variability of a random variable.
*   **Discrete Distributions:** Specific models like Bernoulli, Binomial, and Poisson describe common discrete random processes (single trials, multiple trials, rare events).
*   **Independence & Combinations:** Properties of sums or linear combinations of independent random variables can be derived from individual variable properties.

# Definitions

*   **Random Variable (RV):** A variable whose value is a numerical outcome of a random phenomenon. Typically denoted by an uppercase letter (e.g., X).
*   **Probability Mass Function (PMF):** For a discrete RV, a function f(x) = P(X=x) that gives the probability that the RV X takes on a specific value x.
*   **Cumulative Distribution Function (CDF):** A function F(x) = P(X ≤ x) that gives the probability that the RV X takes on a value less than or equal to x.
*   **Tail Probability:** The probability that an RV X takes on a value greater than x, calculated as P(X > x) = 1 - F(x).
*   **Expectation (Mean, E[X] or μ):** The weighted average of the possible values of an RV, where weights are the probabilities. Represents the long-run average value.
*   **Variance (Var(X) or σ²):** The expectation of the squared deviation of an RV from its mean, E[(X - μ)²]. Measures the spread or dispersion of the distribution.
*   **Standard Deviation (SD or σ):** The square root of the variance, providing a measure of spread in the original units of the RV.


# Random Variables (General Properties)

## Definition
A function that assigns a numerical value to each outcome in the sample space of a random experiment.

## Key Insights
*   The **PMF**, f(x), specifies the probability P(X=x) for each possible discrete value x. The sum of all PMF values must equal 1.
*   The **CDF**, F(x), accumulates probabilities, representing P(X ≤ x). It is non-decreasing, starting at 0 and ending at 1.
*   **Expectation** provides the central point or average value of the distribution.
*   **Variance** quantifies the average squared distance of values from the mean, indicating variability. Standard deviation is the square root of variance.

## Formula
*   **Expectation (Discrete RV):**
    E[X] = Σ [x * P(X=x)] = Σ [x * f(x)]
*   **Variance (Discrete RV):**
    Var(X) = E[(X - E[X])²] = Σ [(x - E[X])² * f(x)]
    Alternatively: Var(X) = E[X²] - (E[X])²
*   **Standard Deviation:**
    SD(X) = √Var(X)
*   **Linear Combinations:** If X₁, ..., Xₙ are independent RVs with E[Xᵢ] = μ and Var(Xᵢ) = σ², and S = ΣXᵢ:
    *   E[S] = Σ E[Xᵢ] = nμ
    *   Var(S) = Σ Var(Xᵢ) = nσ² (due to independence)



# Bernoulli Distribution

## Bernoulli Distribution - Definition
Models a single trial with exactly two possible outcomes, conventionally labeled "success" (usually coded as 1) and "failure" (usually coded as 0).

## Bernoulli Distribution - Key Insights
*   Characterized by a single parameter, **p**, the probability of success.
*   The probability of failure is **q = 1 - p**.
*   It is the fundamental building block for the Binomial distribution.

## Bernoulli Distribution - Examples
*   A single coin toss (Heads/Tails).
*   The outcome of a single customer call (Purchase/No Purchase).
*   Testing a single item (Defective/Not Defective).

## Bernoulli Distribution - Formula
*   **PMF:**
    f(y; p) = pʸ * (1-p)¹⁻ʸ, for y ∈ {0, 1}
    Alternatively: P(Y=1) = p, P(Y=0) = 1-p = q
*   **Expectation:**
    E[Y] = p
*   **Variance:**
    Var(Y) = p(1-p) = pq



# Binomial Distribution

## Binomial Distribution - Definition
Models the number of successes (**y**) in a fixed number (**n**) of independent and identical **Bernoulli trials**, where the probability of success (**p**) is constant for each trial.

## Binomial Distribution - Key Insights
*   Requires parameters **n** (number of trials) and **p** (probability of success per trial).
*   Assumes trials are independent and have the same success probability.
*   Represents the sum of n independent Bernoulli(p) random variables.
*   Tools like MS Excel (BINOM.DIST function) can compute PMF (P(Y=y)) and CDF (P(Y≤y)) values.

## Binomial Distribution - Examples
*   Number of heads in 10 coin tosses (n=10, p=0.5).
*   Number of successful insurance sales in 50 calls (n=50, p=estimated success rate).
*   Number of defective pumps found in a daily sample of 20 (n=20, p=defect rate, "success" defined as finding a defect).

## Binomial Distribution - Comparisons
*   **Bernoulli vs. Binomial:** Bernoulli models a single trial (n=1), while Binomial models multiple trials (n > 1).

## Binomial Distribution - Formula
*   **PMF:**
    f(y; n, p) = P(Y=y) = C(n, y) * pʸ * (1-p)ⁿ⁻ʸ
    where C(n, y) = n! / (y!(n-y)!) is the binomial coefficient ("n choose y"), for y = 0, 1, ..., n.
*   **Expectation:**
    E[Y] = np
*   **Variance:**
    Var(Y) = np(1-p) = npq
*   **Standard Deviation:**
    SD(Y) = √[np(1-p)] = √[npq]




# Poisson Distribution

## Poisson Distribution - Definition
Models the probability of a given number of events (**y**) occurring within a fixed interval of time, space, or other continuous measure, when these events occur independently at a constant average rate. Often used for rare events.

## Poisson Distribution - Key Insights
*   Characterized by a single parameter, **λ (lambda)**, representing the average number of events in the specified interval (the rate).
*   The random variable Y can take non-negative integer values (0, 1, 2, ...).
*   A key property is that the mean and variance are both equal to λ.
*   Related to the **Poisson process**, where inter-arrival times between events follow an **Exponential distribution**. The count of events up to time t, N(t), in such a process follows a Poisson distribution with parameter λt (if λ is the rate per unit time).

## Poisson Distribution - Examples
*   Number of emails received per hour.
*   Number of defects per square meter of fabric.
*   Number of customer arrivals at a service counter per 10 minutes.
*   Number of likes on a social media post per day.

## Poisson Distribution - Comparisons
*   **Binomial vs. Poisson:** Binomial counts successes in a fixed number of trials (n). Poisson counts events over a continuous interval (no fixed n), often applicable when n is very large and p is very small such that np ≈ λ.

## Poisson Distribution - Formula
*   **PMF:**
    f(y; λ) = P(Y=y) = (e⁻ˡ * λʸ) / y!
    where e is the base of the natural logarithm (≈ 2.71828), for y = 0, 1, 2, ...
*   **Expectation:**
    E[Y] = λ
*   **Variance:**
    Var(Y) = λ
*   **Standard Deviation:**
    SD(Y) = √λ



# Conclusion

This module introduces the foundational concept of **random variables** for quantifying uncertainty, characterized by their **probability distributions (PMF/CDF)**, **expectation**, and **variance**. Building on this, three key discrete distributions are detailed: the **Bernoulli** for single two-outcome trials, the **Binomial** for counting successes across multiple independent Bernoulli trials, and the **Poisson** for modeling the occurrence of rare events over continuous intervals. Understanding these distributions and their properties (like the relationship between Binomial and Bernoulli, or the mean-variance equality in Poisson) is essential for analyzing probabilistic scenarios in various fields.



    `
},
'3-1':{
    title: 'Continuous Probability Distributions',
    content: `
# Core Concepts

*   Continuous probability distributions describe probabilities for continuous random variables, where outcomes can take any value within a range.
*   Unlike discrete distributions, the probability of a continuous variable taking a specific single value is zero; probabilities are defined over intervals.
*   Key functions include the Probability Density Function (PDF) and the Cumulative Distribution Function (CDF).
*   Expected value (mean) and variance are central measures, calculated using integration rather than summation as used for discrete variables.
*   Understanding these distributions is fundamental for advanced statistical analysis and inference.

# Definitions of Key Terms:
*   **Continuous Random Variable:** A variable whose value is obtained by measuring and can take on an infinite number of values within a given range (e.g., height, time).
*   **Probability Density Function (PDF), f(x):** A function describing the likelihood of a continuous random variable taking on a given value. The area under the curve of the PDF between two points represents the probability that the variable falls within that interval. For any valid PDF, f(x) ≥ 0 for all x, and the total area under the curve is 1.
*   **Cumulative Distribution Function (CDF), F(x):** A function giving the probability that the random variable X is less than or equal to a specific value x (i.e., F(x) = P(X ≤ x)). It is calculated by integrating the PDF from the minimum possible value up to x.
*   **Expected Value (E[X] or μ):** The long-run average value of a random variable. For a continuous variable, it is calculated by integrating the product of the variable and its PDF over its range: E[X] = ∫ x * f(x) dx.
*   **Variance (Var(X) or σ²):** A measure of the spread or dispersion of the distribution. For a continuous variable, it is the expected value of the squared deviation from the mean: Var(X) = E[(X - μ)²] = ∫ (x - μ)² * f(x) dx. The standard deviation (σ) is the square root of the variance.


# Uniform Distribution

## Uniform Distribution - Definition
*   A continuous probability distribution where all values within a given range [a, b] are equally likely.

## Uniform Distribution - Key Insights
*   Characterized by a constant probability density over its defined interval.

## Uniform Distribution - Examples
*   The source notes mention examples but do not provide specific details in the provided excerpts. A common example would be a random number generator producing values between 0 and 1.

# Exponential Distribution

## Exponential Distribution - Definition
*   A continuous probability distribution that describes the time until an event occurs in a Poisson process (events occurring independently at a constant average rate).

## Exponential Distribution - Key Insights
*   Often used to model the time between events, such as customer arrivals or component failures.
*   Characterized by a single parameter, lambda (λ), the rate parameter.
*   The distribution is memoryless, meaning the probability of an event occurring in the future is independent of how much time has already passed.
*   Templates can facilitate the computation of cumulative probabilities (P(X ≤ x)), tail probabilities (P(X ≥ x)), and inverse calculations (finding x for a given probability).

## Exponential Distribution - Examples
*   Predicting time between customer arrivals on an online platform (λ = arrival rate). If λ = 0.2 arrivals per minute, the mean time between arrivals is 5 minutes.

## Exponential Distribution - Comparisons
*   The Exponential distribution is continuous, unlike discrete distributions such as Binomial or Poisson which deal with counts of events.

## Exponential Distribution - Formula
*   **Mean (Expected Value):** μ = 1 / λ
*   **Standard Deviation:** σ = 1 / λ
*   **Variance:** σ² = (1 / λ)²
    *   Note: Mean equals Standard Deviation.

# Normal Distribution

## Normal Distribution - Definition
*   A continuous probability distribution characterized by its symmetric, bell-shaped curve. It is defined by its mean (μ) and standard deviation (σ).

## Normal Distribution - Key Insights
*   Fundamental in statistics due to the Central Limit Theorem.
*   Widely applicable in natural and social sciences, engineering, and finance.
*   Crucial for machine learning (e.g., Gaussian Naive Bayes) and AI advancements (e.g., image/speech processing).
*   The Standard Normal Distribution is a special case with μ = 0 and σ = 1.
*   Templates and software functions (like Excel's NORM.DIST) allow calculation of probabilities:
    *   Cumulative probability: P(X ≤ x)
    *   Tail probability: P(X ≥ x)
    *   Probability within an interval: P(a ≤ X ≤ b)

## Normal Distribution - Examples
*   Time taken by students to complete an exam.
*   Weight of sugar packets filled by a machine.
*   Thickness of glass sheets produced.

## Normal Distribution - Comparisons
*   The Normal distribution is continuous, whereas the Binomial distribution is discrete.
*   Under specific conditions, the Normal distribution can approximate the Binomial distribution.

## Normal Distribution - Formula
*   **Excel Function for Cumulative Probability:** NORM.DIST(x, mean, standard_dev, cumulative)
    *   x: The value for which you want the distribution.
    *   mean: The arithmetic mean (μ) of the distribution.
    *   standard_dev: The standard deviation (σ) of the distribution.
    *   cumulative: TRUE for CDF (P(X ≤ x)), FALSE for PDF (f(x)).
*   **Normal Approximation to Binomial:**
    *   Conditions: n * p ≥ 5 and n * q ≥ 5 (where q = 1 - p)
    *   Mean: μ = n * p
    *   Variance: σ² = n * p * q
    *   Standard Deviation: σ = sqrt(n * p * q)

# Distributions Related to the Normal Distribution

## Chi-Square (χ²) Distribution
*   **Definition/Derivation:** A continuous distribution derived from summing squared standard normal variables. If Z ~ N(0, 1), then Z² ~ χ²(1) (chi-square with 1 degree of freedom). Summing *k* independent squared standard normal variables results in a chi-square distribution with *k* degrees of freedom.
*   **Key Insights/Applications:** Used in Goodness-of-Fit tests, tests of independence, and constructing confidence intervals for variance. Foundational for statistical inference.

## t-Distribution (Student's t-Distribution)
*   **Definition/Derivation:** A continuous distribution similar in shape to the normal distribution but with heavier tails, especially for small sample sizes. It arises when estimating the mean of a normally distributed population using the sample standard deviation when the population standard deviation is unknown.
*   **Key Insights/Applications:** Essential for hypothesis testing and confidence intervals involving small sample sizes (e.g., clinical trials). Becomes closer to the normal distribution as sample size increases. Crucial for statistical inference.

## F-distribution
*   **Definition/Derivation:** A continuous distribution derived from the ratio of two independent chi-square variables, each divided by its degrees of freedom.
*   **Key Insights/Applications:** Primarily used to compare variances of two or more populations (e.g., in Analysis of Variance - ANOVA). Critical points F(alpha, k1, k2) correspond to upper tail probabilities (alpha) and depend on numerator (k1) and denominator (k2) degrees of freedom. The distribution shape peaks and approaches 1 as k2 increases. Important for statistical inference.

# Conclusion

This module detailed several essential continuous probability distributions, contrasting them with discrete counterparts and establishing their foundational role in statistics. The Uniform, Exponential, and particularly the Normal distribution were explored, covering their definitions, properties, applications (from server loads to AI), and calculation methods using templates or functions. Additionally, the module introduced the Chi-Square, t, and F distributions, highlighting their derivation from the Normal distribution and their critical importance for upcoming topics in statistical inference, such as hypothesis testing and variance comparison.
    `
},
'4-1':{
    title: 'Introduction to Microeconomics',
    content: `
# Core Concepts

*   Statistical inference relies on using sample data to draw conclusions about a larger population.
*   The distinction between sample statistics (e.g., $\\bar{x}$ $, s, \\bar{p}$) and population parameters (e.g., $\\mu, \\sigma, P$) is fundamental to estimation.
*   Proper sampling methods, particularly probabilistic ones, are essential for representative samples and valid inferences.
*   Sampling distributions describe the expected variation of sample statistics if sampling were repeated numerous times.
*   The Central Limit Theorem (CLT) provides a basis for using the normal distribution in inference for sample means from large samples.
*   Point estimators are evaluated based on desirable properties like unbiasedness, efficiency, and consistency.

# Definitions:

*   **Population:** The entire collection of individuals or items of interest.
*   **Sample:** A subset of the population selected for study.
*   **Population Parameter:** A numerical characteristic of the entire population (e.g., $\\mu, \\sigma, P$). Typically unknown.
*   **Sample Statistic:** A numerical characteristic calculated from a sample (e.g., $\\bar{x}, s, \\bar{p}$). Used to estimate population parameters.
*   **Point Estimator:** A sample statistic used to provide a single value estimate of a population parameter.
*   **Sampling Distribution:** The probability distribution of a sample statistic calculated from all possible samples of a given size drawn from a population.
*   **Standard Error:** The standard deviation of a sampling distribution, measuring the variability of a sample statistic.
*   **Sampling Error:** The difference between a sample statistic and the corresponding population parameter, arising naturally due to chance variation in sampling.
*   **Non-sampling Error:** Errors occurring during data collection, recording, or processing, unrelated to the act of sampling itself.

# Populations, Samples, and Estimation

## Populations, Samples, and Estimation - Definition:
The process of using data from a sample (a subset) to estimate characteristics (parameters) of a larger population (the entire group).

## Populations, Samples, and Estimation - Key Insights:
*   The primary goal of inferential statistics is to learn about population parameters using sample statistics.
*   Population parameters are fixed but usually unknown values.
*   Sample statistics are calculated from sample data, vary from sample to sample, and serve as estimators for population parameters.

## Populations, Samples, and Estimation - Examples:
*   The sample mean ($\\bar{x}$) estimates the population mean ($\\mu$).
*   The sample standard deviation ($s$) estimates the population standard deviation ($\\sigma$).
*   The sample proportion ($\\bar{p}$) estimates the population proportion ($P$).

## Populations, Samples, and Estimation - Comparisons:
*   **Parameter:** Fixed, describes population, usually unknown.
*   **Statistic:** Variable, describes sample, calculated from data, used to estimate parameter.

# The Sampling Process

## The Sampling Process - Definition:
A structured procedure for selecting a sample from a population to ensure representative data for analysis.

## The Sampling Process - Key Insights:
*   A well-defined process is crucial for the validity of statistical inferences.
*   Key steps include:
    1.  **Identify Target Population:** Clearly define the group of interest.
    2.  **Determine Sampling Frame:** List or procedure to access population elements.
    3.  **Select Sample Size:** Balance precision needs with practical constraints.
    4.  **Choose Sampling Method:** Select the technique for drawing the sample.

# Sampling Methods

## Sampling Methods - Definition:
Techniques used to select a sample from a population. Broadly categorized as probabilistic (random selection) and non-probabilistic (non-random selection).

## Sampling Methods - Key Insights:
*   Probabilistic methods allow for statistical inference and estimation of sampling error because selection probabilities are known.
*   Non-probabilistic methods are often convenient but do not support statistically robust population inferences.

## Examples (Probabilistic):
*   **Random Sampling:** Each member has an equal chance of selection. Simple and fundamental.
*   **Stratified Sampling:** Population divided into homogeneous subgroups (strata); random samples drawn from each stratum. Ensures representation of key subgroups. Useful for heterogeneous populations.
*   **Cluster Sampling:** Population divided into clusters (often geographic); random sample of clusters selected; all units within selected clusters are sampled. Logistically efficient for large/dispersed populations. Assumes heterogeneity within clusters.

## Examples (Non-Probabilistic):
*   Convenience Sampling
*   Judgment Sampling

## Sampling Methods - Comparisons:
*   **Stratified vs. Cluster:** Stratified samples *within* all groups (strata) for representation; Cluster samples *all units within* selected groups (clusters) for efficiency.

# Sampling Distributions

## Sampling Distributions - Definition:
The theoretical probability distribution of a specific sample statistic (like $\\bar{x}$ or $\\bar{p}$) obtained by considering all possible samples of a fixed size ($n$) from a population.

## Sampling Distributions - Key Insights:
*   Describes the long-run behavior and variability of a sample statistic.
*   Essential for understanding the precision of estimates and for constructing confidence intervals and hypothesis tests.
*   Characterized by its shape, mean (Expected Value), and standard deviation (Standard Error).

## Sampling Distributions - Examples:
*   **Sampling Distribution of the Sample Mean ($\\bar{x}$):** The distribution of means from all possible samples of size $n$.
*   **Sampling Distribution of the Sample Proportion ($\\bar{p}$):** The distribution of proportions from all possible samples of size $n$.

## Sampling Distributions - Formula:
*   **For Sample Mean ($\\bar{x}$):**
    *   Expected Value: $E(\\bar{x}) = \mu$
    *   Standard Error: $SE$($\\bar{x}$) = $\sigma$ {$\\bar{x}$} = $ \\frac{\\sigma}{\\sqrt{n}} $ (Requires population SD $\\sigma$; if unknown, estimate with sample SD $s$)
*   **For Sample Proportion ($\\bar{p}$):**
    *   Expected Value: $E(\\bar{p}) = P$
    *   Standard Error: $SE(\\bar{p}) = \\sigma_{\\bar{p}} = \\sqrt{\\frac{P(1-P)}{n}}$ (Requires population proportion $P$; often estimated using $\\bar{p}$)

# Central Limit Theorem (CLT)

## Central Limit Theorem (CLT) - Definition:
A fundamental theorem stating that the sampling distribution of the sample mean ($\\bar{x}$) approaches a normal distribution as the sample size ($n$) increases, regardless of the population's original distribution shape.

## Central Limit Theorem (CLT) - Key Insights:
*   Applies generally when sample size $n$ is sufficiently large (common rule of thumb: $n \\ge 30$).
*   Allows the use of normal probability calculations for inference about the population mean, even if the population is not normally distributed.
*   The mean of this approximate normal distribution is the population mean ($\\mu$), and the standard deviation is the standard error ($\\sigma/\\sqrt{n}$).
*   The CLT applies specifically to the *distribution of the sample mean*, not the individual data points or the population distribution itself.

## Formula (Implication):
*   For large $n$, $ \\bar{x} \\sim N(\\mu, \\frac{\\sigma^2}{n}) $ (Note: $\\sim$ means "approximately distributed as", $N$ denotes Normal distribution with mean $\mu$ and variance $\\frac{\\sigma^2}{\ n}$)

# Properties of Point Estimators

## Properties of Point Estimators - Definition:
Criteria used to evaluate the quality and reliability of point estimators (sample statistics used to estimate population parameters).

## Properties of Point Estimators - Key Insights:
*   Desirable properties indicate that an estimator is likely to provide accurate and precise estimates.

## Examples (Properties):
*   **Unbiasedness:** The expected value (average over many samples) of the estimator equals the population parameter.
    *   Example: $E(\\bar{x}) = \\mu$; $E(\\bar{p}) = P$. $\\bar{x}$ and $\\bar{p}$ are unbiased estimators.
*   **Efficiency:** Among unbiased estimators, the one with the smallest standard error (variance) is most efficient.
    *   Example: For normally distributed data, $\\bar{x}$ is more efficient than the sample median for estimating $\\mu$.
*   **Consistency:** The estimator tends to get closer to the population parameter as the sample size ($n$) increases.
*   **Sufficiency:** The estimator uses all the information available in the sample data relevant to estimating the parameter.
    *   Example: $\\bar{x}$ and $\\bar{p}$ are sufficient estimators.

# Sources of Error in Sampling

## Sources of Error in Sampling - Definition:
Errors that can affect the accuracy of inferences made from sample data, categorized as sampling error and non-sampling error.

## Sources of Error in Sampling - Key Insights:
*   **Sampling Error:** The inherent variability resulting from observing a sample instead of the entire population. It is quantifiable (related to standard error) and generally decreases as sample size increases.
*   **Non-sampling Error:** All other errors, such as flaws in study design, data collection instruments, data entry, or non-response bias. These errors are not reduced by increasing sample size and require careful procedural controls.

## Examples (Non-sampling Errors):
*   **Coverage Error:** Sampling frame does not match the target population.
*   **Non-response Error:** Significant differences between respondents and non-respondents.
*   **Measurement Error:** Inaccurate responses due to question wording, interviewer bias, etc.
*   **Processing Error:** Mistakes in data entry or analysis.

## Sources of Error in Sampling - Comparisons:
*   **Sampling Error:** Unavoidable consequence of sampling; reduced by larger $n$.
*   **Non-sampling Error:** Avoidable through careful planning and execution; not reduced by larger $n$.

# Conclusion

Understanding the relationship between populations and samples is central to statistical inference. Selecting appropriate probabilistic sampling methods ensures data representativeness, allowing sample statistics like $\\bar{x}$ and $\\bar{p}$ to serve as reliable point estimators for population parameters $\mu$ and $P$. The concepts of sampling distributions and the Central Limit Theorem provide the theoretical framework for assessing estimator variability (standard error) and making inferences, while evaluating estimator properties (unbiasedness, efficiency) and minimizing both sampling and non-sampling errors ensures the robustness of conclusions drawn from sample data.
    `
},
'5-1':{
    title: 'Statistical Inference',
    content: `
# Core Concepts

*   **Statistical inference** utilizes sample data to draw conclusions about unknown population characteristics (parameters).
*   The primary methods covered are **Confidence Intervals** (estimating parameter ranges) and **Hypothesis Testing** (evaluating claims about parameters).
*   Focus is placed on key population parameters relevant to entrepreneurs: **mean (μ)**, **proportion (p)**, and **variance (σ²)**.
*   Understanding the **logic and reasoning** behind these techniques is paramount, often more critical than computational mechanics.
*   Techniques rely heavily on the principles of **sampling and sampling distributions**.
*   Determining appropriate **sample sizes** is crucial for achieving desired precision in estimates.

# Definitions of Key Terms

*   **Statistical Inference:** The process of using data analysis to deduce properties of an underlying distribution of probability based on sample data.
*   **Population Parameter:** A numerical value summarizing a characteristic of the entire population (e.g., population mean \`μ\`, population proportion \`p\`).
*   **Point Estimate:** A single value calculated from sample data used to estimate a population parameter (e.g., sample mean \`X̄\`, sample proportion \`p̂\`).
*   **Confidence Interval (CI):** An interval estimate, derived from sample data, that is likely to contain the true value of an unknown population parameter with a specified level of confidence.
*   **Margin of Error (E):** The amount added and subtracted from the point estimate to create the confidence interval; it quantifies the uncertainty associated with the estimate.
*   **Hypothesis Testing:** A formal procedure for using sample data to decide between two competing statements (hypotheses) about a population parameter.
*   **Null Hypothesis (H₀):** A statement about a population parameter that is assumed to be true initially and is subjected to testing. Often represents the status quo or no effect/difference.
*   **Alternate Hypothesis (H₁ or Hₐ):** A statement that contradicts the null hypothesis; it represents what the researcher might believe to be true or seeks evidence for.
*   **Significance Level (α):** The probability threshold below which the null hypothesis is rejected. It represents the maximum acceptable probability of making a Type I error (incorrectly rejecting a true null hypothesis).

# Confidence Intervals

## Confidence Intervals - Definition
A Confidence Interval (CI) is a range of values, calculated from sample statistics, that is expected to contain the true population parameter with a certain probability (the confidence level). It provides an interval estimate rather than just a single point estimate.

## Confidence Intervals - Key Insights
*   Confidence intervals quantify the uncertainty surrounding a sample point estimate.
*   They are constructed for population parameters such as the mean (\`μ\`), proportion (\`p\`), and variance (\`σ²\`).
*   The calculation relies on the known sampling distributions of the corresponding sample statistics (\`X̄\`, \`p̂\`, \`s²\`).
*   Factors influencing the width (precision) of a confidence interval include:
    *   **Sample Size (n):** Larger \`n\` generally leads to narrower, more precise intervals.
    *   **Data Variability:** Higher variability (e.g., larger standard deviation) leads to wider intervals.
    *   **Confidence Level:** Higher confidence levels (e.g., 99% vs. 95%) require wider intervals.
*   Determining the required sample size *before* data collection allows control over the margin of error.

## Confidence Intervals - Examples
*   **Mean:** Estimating the average monthly revenue for startups in a specific sector lies within [\$15,000, \$25,000] with 95% confidence.
*   **Proportion:** Estimating that the proportion of customers likely to repurchase a product is between 60% and 70% with 90% confidence.
*   **Variance:** Estimating the variance in delivery times falls within [2.5 hours², 4.0 hours²] with 95% confidence.

## Confidence Intervals - Formula
The general structure of a confidence interval is:
\`Point Estimate ± Margin of Error (E)\`

Specific forms depend on the parameter being estimated:
*   For Population Mean (\`μ\`): \`X̄ ± E\`
*   For Population Proportion (\`p\`): \`p̂ ± E\`
*   For Population Variance (\`σ²\`): Confidence intervals for variance typically use the chi-square (\`χ²\`) distribution and do not have a simple \`s² ± E\` symmetric form. The interval is calculated as \`[(n-1)s² / χ²_upper, (n-1)s² / χ²_lower]\`.

*Note: The Margin of Error (\`E\`) depends on the confidence level, the standard error of the point estimate, and the relevant sampling distribution (e.g., \`Z\`, \`t\`, \`χ²\`).*

# Hypothesis Testing

## Hypothesis Testing - Definition
Hypothesis testing is a formal statistical method used to make decisions about population parameters based on sample evidence. It involves setting up two competing hypotheses (null and alternate) and using sample data to determine which hypothesis is better supported.

## Hypothesis Testing - Key Insights
*   The process begins by formulating the null (\`H₀\`) and alternate (\`H₁\`) hypotheses based on the claim or question being investigated.
*   The **alternate hypothesis (H₁)** often represents the specific claim or effect that requires evidence to be accepted.
*   The **null hypothesis (H₀)** typically represents the status quo or a statement of no effect/difference, assumed true unless sufficient evidence contradicts it.
*   The **context** of the entrepreneurial problem is crucial for correctly defining \`H₀\` and \`H₁\`.
*   Tests are conducted for parameters like the population mean (\`μ\`), proportion (\`p\`), and variance (\`σ²\`).
*   A **significance level (α)** is set *before* the test, defining the threshold for rejecting \`H₀\` and the risk of a Type I error.
*   A **test statistic** is calculated from the sample data under the assumption that \`H₀\` is true.
*   A decision (Reject \`H₀\` or Fail to Reject \`H₀\`) is made by comparing the test statistic to a critical value or by comparing the **p-value** to the significance level (\`α\`).
    *   If \`p-value ≤ α\`, reject \`H₀\`.
    *   If \`p-value > α\`, fail to reject \`H₀\`.

## Examples of Hypotheses Formulation
*   **Population Mean (μ):**
    *   Claim: Average lentil packet weight is less than 500 grams.
        *   H₀: \`μ ≥ 500\`
        *   H₁: \`μ < 500\` (Claim)
    *   Claim: Mean service response time has increased to more than 48 hours.
        *   H₀: \`μ ≤ 48\`
        *   H₁: \`μ > 48\` (Claim)
*   **Population Proportion (p):**
    *   Claim: More than 10% of coupon recipients use them.
        *   H₀: \`p ≤ 0.10\`
        *   H₁: \`p > 0.10\` (Claim)
    *   Claim: Less than 50% of travelers feel sleeper arrangements are inadequate.
        *   H₀: \`p ≥ 0.50\`
        *   H₁: \`p < 0.50\` (Claim)
*   **Population Variance (σ²):**
    *   Claim: The variance in a new exam score is different from the old variance of 100.
        *   H₀: \`σ² = 100\`
        *   H₁: \`σ² ≠ 100\` (Claim)

## Formula (Conceptual Process)
While specific formulas vary by test (\`Z-test\`, \`t-test\`, \`Chi-square test\`), the core logic involves:
1.  Calculate a **Test Statistic**: \`(Sample Statistic - Hypothesized Parameter Value) / Standard Error of the Statistic\`
2.  Determine the **p-value** associated with the test statistic or find the **Critical Value(s)** based on \`α\` and the distribution.
3.  **Decision Rule**: Compare \`p-value\` to \`α\` or compare the test statistic to the critical value(s).

# Conclusion

This module covers the fundamentals of statistical inference, focusing on **confidence intervals** and **hypothesis testing** as essential tools for entrepreneurial decision-making. Confidence intervals provide estimated ranges for key population parameters (\`mean\`, \`proportion\`, \`variance\`) based on sample data, quantifying the associated uncertainty. Hypothesis testing offers a structured framework to evaluate specific claims about these parameters using evidence from samples, guided by significance levels and \`p-values\`. Both techniques depend critically on understanding sampling distributions and allow entrepreneurs to move from sample observations to informed judgments about the broader populations relevant to their businesses.
    `
},
'6-1':{
    title: 'Association between Random Variables and Simple Linear Regression',
    content: `
# Core Concepts

*   Statistical analysis often begins with understanding the **linear relationship** between two variables using covariance and correlation.
*   **Simple Linear Regression (SLR)** models this relationship, predicting a dependent variable from a single independent variable.
*   The **Ordinary Least Squares (OLS)** method is the standard approach for estimating the parameters (intercept and slope) of the linear regression model.
*   **Tests of significance** determine if the identified linear relationship is statistically meaningful (i.e., not due to random chance).
*   **Residual analysis** is crucial for validating the underlying assumptions of the regression model.
*   **Summary statistics** provide initial data insights and evaluate the overall model fit (e.g., R-square).

# Definitions of Key Terms

*   **Covariance:** A measure indicating the direction of the linear relationship between two variables; it shows how they change together.
*   **Correlation Coefficient:** A standardized measure (ranging from -1 to +1) indicating both the strength and direction of the linear relationship between two variables, unaffected by their units of measurement.
*   **Simple Linear Regression (SLR):** A statistical method modeling the relationship between one independent variable ($x$) and one dependent variable ($y$) using a linear equation.
*   **Ordinary Least Squares (OLS):** An estimation technique used in regression to find the line that minimizes the sum of the squared differences between observed and predicted values.
*   **Residuals (or Error Term $\\epsilon$):** The differences between the observed values of the dependent variable ($y_i$) and the values predicted by the regression model ($\\hat{y}_i$). They represent unexplained variation.
*   **R-square (Coefficient of Determination):** A summary statistic representing the proportion of the variance in the dependent variable that is predictable from the independent variable using the regression model.

# Covariance and Correlation

## Covariance and Correlation - Definition
Measures used to quantify the extent and direction of a linear association between two quantitative variables.

## Covariance and Correlation - Key Insights
*   Covariance indicates the direction (positive or negative) of the linear relationship.
*   Correlation provides a standardized measure (-1 to +1) of both the strength and direction of the linear relationship.
*   The Pearson product moment correlation coefficient is a common measure for sample correlation.
*   **Comparison - Covariance:** Value depends on the units of measurement of the variables. A positive value indicates variables tend to increase together; a negative value indicates one tends to increase as the other decreases.
*   **Comparison - Correlation:** Unit-free measure, making it easier to compare the strength of linear relationships across different pairs of variables.

## Covariance and Correlation - Formula
*   Sample Correlation Coefficient (R):
    $$R(x, y) = \\frac{S(x, y)}{s_x \\cdot s_y}$$
    Where:
    *   $S(x, y)$ is the sample covariance between $x$ and $y$.
    *   $s_x$ is the sample standard deviation of $x$.
    *   $s_y$ is the sample standard deviation of $y$.

# Simple Linear Regression (SLR)

## Simple Linear Regression (SLR) - Definition
A statistical technique that assumes a linear relationship between a single independent variable ($x$) and a dependent variable ($y$) to model and predict outcomes.

## Simple Linear Regression (SLR) - Key Insights
*   The goal is to find the best-fitting straight line through the data points.
*   The model includes an intercept ($\\beta_0$), a slope ($\\beta_1$), and a random error term ($\\epsilon$).
*   The process involves data preparation (splitting, descriptive stats), model definition, parameter estimation (typically via OLS), model validation (diagnostics), and application (prediction).
*   The expected value of $y$ for a given $x$, $E(y)$, represents the average value of $y$ on the true regression line.

## Simple Linear Regression (SLR) - Formula
*   Regression Model:
    $$y = \\beta_0 + \\beta_1 x + \\epsilon$$
*   Expected Value of y:
    $$E(y) = \\beta_0 + \\beta_1 x$$
    Where:
    *   $y$ is the dependent variable.
    *   $x$ is the independent variable.
    *   $\\beta_0$ is the true population intercept.
    *   $\\beta_1$ is the true population slope.
    *   $\\epsilon$ is the random error term.

# Ordinary Least Squares (OLS)

## Ordinary Least Squares (OLS) - Definition
A method used to estimate the unknown parameters (intercept $b_0$ and slope $b_1$ as estimates of $\\beta_0$ and $\\beta_1$) in a linear regression model.

## Ordinary Least Squares (OLS) - Key Insights
*   OLS works by minimizing the sum of the squared residuals (the vertical distances between observed data points and the fitted regression line).
*   It provides the best linear unbiased estimates (BLUE) for the regression coefficients under the standard regression assumptions.

## Ordinary Least Squares (OLS) - Formula
*   Estimated Slope ($b_1$):
    $$b_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$$
*   Estimated Intercept ($b_0$):
    $$b_0 = \\bar{y} - b_1 \\bar{x}$$
    Where:
    *   $x_i$, $y_i$ are individual data points.
    *   $\\bar{x}$, $\\bar{y}$ are the sample means of $x$ and $y$.
    *   $\\sum$ denotes summation over all data points.

# Test of Significance (in Regression)

## Test of Significance (in Regression) - Definition
Statistical procedures used to determine whether the observed linear relationship between the independent and dependent variable in the sample data is strong enough to conclude that a relationship exists in the population.

## Test of Significance (in Regression) - Key Insights
*   Commonly involves testing the null hypothesis that the population slope coefficient ($\\beta_1$) is zero ($H_0: \\beta_1 = 0$).
*   Uses test statistics (like t-statistic or F-statistic), their corresponding distributions (t-distribution, F-distribution), p-values, and confidence intervals.
*   Rejecting the null hypothesis suggests statistically significant evidence of a linear relationship.

*(Note: Specific formulas for t-statistic or F-statistic are context-dependent but generally compare the estimated coefficient to its standard error or compare model variance to residual variance).*

# Residual Analysis

## Residual Analysis - Definition
The process of examining the model's residuals (the difference between observed and predicted values) to check the validity of regression assumptions and identify potential problems like outliers or influential points.

## Residual Analysis - Key Insights
*   Key assumptions about the error term ($\\epsilon$) checked via residuals:
    1.  Mean is zero.
    2.  Constant variance (Homoscedasticity).
    3.  Independence of errors.
    4.  Normal distribution.
*   **Residual plots** (residuals vs. predicted values or independent variable) are primary tools. An ideal plot shows random scatter around zero (horizontal band) with no discernible pattern.
*   Patterns (e.g., funnel shape, curve) suggest violations of assumptions, potentially indicating the linear model is inappropriate or needs modification.
*   Outliers (points far from the general trend) require investigation.

## Residual Analysis - Formula
*   Residual calculation:
    $$\\epsilon_i = y_i - \\hat{y}_i$$
    Where:
    *   $\\epsilon_i$ is the residual for the i-th observation.
    *   $y_i$ is the observed value of the dependent variable.
    *   $\\hat{y}_i$ is the predicted value from the regression line ($b_0 + b_1 x_i$).

# Summary Statistics (in Regression Context)

## Summary Statistics - Definition
Numerical values that summarize and describe the characteristics of a dataset or the properties of a regression model.

## Summary Statistics - Key Insights
*   **Descriptive Statistics:** Used before modeling (e.g., mean, median, standard deviation, count) to understand data variability and center. Visualizations like box plots and scatter plots aid this understanding.
*   **Regression Output Statistics:** Used to evaluate model fit and parameter estimates.
    *   **R-square (Coefficient of Determination):** Measures the proportion of variation in the dependent variable explained by the model. A higher value indicates a better fit relative to the total variation.
    *   **Standard Error of the Estimate:** Measures the typical deviation of observed values from the regression line.
    *   **SST (Total Sum of Squares):** Measures total variability in the dependent variable around its mean.
    *   **SSR (Regression Sum of Squares):** Measures variability explained by the regression model.
    *   **SSE (Error Sum of Squares):** Measures unexplained variability (sum of squared residuals).

## Summary Statistics - Examples
*   Descriptive: Mean, Median, Standard Deviation, Number of observations (N).
*   Regression Evaluation: R-square, Standard Error of the estimate.
*   An R-square value of 0.37 indicates that 37% of the total variation in the dependent variable ($y$) is explained by the linear relationship with the independent variable ($x$).

## Summary Statistics - Formula
*   Coefficient of Determination ($R^2$):
    $$R^2 = \\frac{SSR}{SST}$$
*   Relationship between Sums of Squares:
    $$SST = SSR + SSE$$
    `
},
'7-1':{
    title: 'Multiple Linear Regression I',
    content: `
# Core Concepts

*   **Multiple Linear Regression (MLR)** extends simple linear regression to model the linear relationship between one dependent variable and *multiple* independent variables.
*   The model aims to predict the dependent variable or understand the individual contribution of each independent variable while controlling for others.
*   **Ordinary Least Squares (OLS)** is the standard method for estimating the model's coefficients (intercept and slopes) by minimizing the sum of squared errors.
*   **Significance tests (F-test and t-tests)** are crucial for assessing the overall model validity and the statistical importance of individual predictors.
*   **Residual analysis** is performed to validate the underlying assumptions of the linear regression model.
*   **R-squared** measures the proportion of variance in the dependent variable explained by the model, while **multicollinearity** assesses problematic correlations among independent variables.

# Key Terms Definitions

*   **Multiple Linear Regression (MLR):** A statistical technique used to model the linear relationship between a single dependent (response) variable and two or more independent (predictor) variables.
*   **Regression Coefficients ($\\beta_0, \\beta_1, ..., \\beta_p$):** Population parameters representing the intercept ($\\beta_0$) and the change in the mean of the dependent variable for a one-unit change in a specific independent variable ($\\beta_i$), holding all other independent variables constant.
*   **Estimated Coefficients ($b_0, b_1, ..., b_p$):** Sample-based estimates of the population regression coefficients, calculated using methods like OLS.
*   **Sum of Squares Error (SSE):** The sum of the squared differences between the observed values ($y_i$) and the values predicted by the regression model ($\\hat{y}_i$). OLS minimizes this value.
*   **Coefficient of Determination ($R^2$):** A statistic indicating the proportion of the total variability in the dependent variable that is accounted for by the set of independent variables in the regression model.
*   **Multicollinearity:** A condition where two or more independent variables in an MLR model are highly linearly related, potentially causing issues with coefficient estimation and interpretation.
*   **Variance Inflation Factor (VIF):** A measure used to quantify the severity of multicollinearity in an MLR model for a specific independent variable.

# Basics of Multiple Linear Regression

## Basics - Definition
An extension of simple linear regression used to establish and quantify a linear relationship between a dependent variable ($y$) and two or more independent variables ($x_1, x_2, ..., x_p$).

## Basics - Key Insights
*   Allows for the analysis of more complex relationships where multiple factors influence an outcome.
*   The coefficient ($\\beta_i$ or its estimate $b_i$) for an independent variable $x_i$ represents the expected change in $y$ for a one-unit increase in $x_i$, *assuming all other independent variables in the model are held constant*.
*   The goal is often prediction of $y$ or understanding the independent effect of each $x$ variable.

## Basics - Formula
*   Population Model:
    $$y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_p x_p + \\epsilon$$
*   Estimated Model (based on sample data):
    $$\\hat{y} = b_0 + b_1 x_1 + b_2 x_2 + ... + b_p x_p$$
    Where:
    *   $y$: Observed dependent variable value.
    *   $\\hat{y}$: Predicted dependent variable value.
    *   $x_i$: Value of the i-th independent variable.
    *   $\\beta_0, \\beta_i$: Population intercept and slope coefficients.
    *   $b_0, b_i$: Sample estimates of intercept and slope coefficients.
    *   $\\epsilon$: Random error term.
    *   $p$: Number of independent variables.

# Ordinary Least Squares (OLS)

## Ordinary Least Squares (OLS) - Definition
The primary method used to estimate the regression coefficients ($b_0, b_1, ..., b_p$) in multiple linear regression.

## Ordinary Least Squares (OLS) - Key Insights
*   OLS finds the coefficient values that minimize the sum of the squared differences between observed dependent variable values ($y_i$) and the values predicted by the model ($\\hat{y}_i$). This minimized sum is the SSE.
*   While formulas exist (often involving matrix algebra), computation is typically performed using statistical software (e.g., Excel, R, Python). Interpretation of software output is key.

## Ordinary Least Squares (OLS) - Formula
*   Objective: Minimize
    $$SSE = \\sum(y_i - \\hat{y}_i)^2 = \\sum(y_i - (b_0 + b_1 x_{1i} + ... + b_p x_{pi}))^2$$

# Test of Significance

## Overall Test of Significance (F-test)

### Overall Test of Significance (F-test) - Definition
A statistical test to determine if there is a significant linear relationship between the dependent variable and *at least one* of the independent variables included in the model. It assesses the overall utility of the model.

### Overall Test of Significance (F-test) - Key Insights
*   Tests the null hypothesis that *all* slope coefficients are simultaneously zero against the alternative that *at least one* is non-zero.
    *   $H_0: \\beta_1 = \\beta_2 = ... = \\beta_p = 0$
    *   $H_1$: At least one $\\beta_i \\neq 0$ (for $i = 1, ..., p$)
*   Rejection of $H_0$ (typically based on a small p-value associated with the F-statistic) indicates that the model, as a whole, explains a statistically significant amount of variation in the dependent variable.

## Test of Significance for Individual Coefficients (t-test)

### Test of Significance for Individual Coefficients (t-test) - Definition
A statistical test performed for *each* independent variable's coefficient ($b_i$) to determine if that specific variable has a statistically significant linear relationship with the dependent variable, *controlling for the presence of the other independent variables in the model*.

### Test of Significance for Individual Coefficients (t-test) - Key Insights
*   Tests the null hypothesis that a specific population coefficient ($\\beta_i$) is zero against the alternative that it is not zero.
    *   $H_0: \\beta_i = 0$
    *   $H_1: \\beta_i \\neq 0$
*   Rejection of $H_0$ for a specific $b_i$ suggests that the corresponding variable $x_i$ makes a statistically significant contribution to predicting $y$, even when other predictors are accounted for.
*   The significance of the intercept ($b_0$) is often less critical unless the point where all $x$ variables are zero is meaningful in the context.

# Residual Analysis

## Residual Analysis - Definition
The examination of the differences (residuals) between the observed values ($y_i$) and the predicted values ($\\hat{y}_i$) from the regression model to check if the model's assumptions are reasonably satisfied.

## Residual Analysis - Key Insights
*   Assumptions checked include: linearity, independence of errors, constant variance of errors (homoscedasticity), and normality of errors.
*   **Residual plots** (e.g., residuals vs. predicted values, residuals vs. each independent variable) are used to visually inspect for patterns. Ideally, plots should show random scatter around zero. Non-random patterns (e.g., curves, funnels) suggest assumption violations.
*   **Standardized residuals** are often used to identify potential **outliers** (observations with unusually large errors). A common rule of thumb is that standardized residuals outside $\\pm 2$ warrant investigation, and those outside $\\pm 3$ are likely outliers.
*   **Influential observations** are points that, if removed, would significantly change the estimated regression coefficients.

## Residual Analysis - Formula
*   Residual:
    $$e_i = y_i - \\hat{y}_i$$

# Summary Statistics

## Coefficient of Determination (R-squared)

### Coefficient of Determination (R-squared) - Definition
In MLR, $R^2$ (also called the multiple coefficient of determination) measures the proportion of the total variance in the dependent variable ($y$) that is explained by the linear combination of all independent variables ($x_1, ..., x_p$) included in the model.

### Coefficient of Determination (R-squared) - Key Insights
*   Ranges from 0 (no variance explained) to 1 (all variance explained).
*   Provides a measure of the model's goodness-of-fit. A higher $R^2$ generally indicates a better fit, but should be interpreted in context.
*   Example: An $R^2$ of 0.67 means that 67% of the variability observed in the dependent variable is accounted for by the independent variables in the model.
*   Note: $R^2$ never decreases when adding more variables, even if they are irrelevant. Adjusted $R^2$ is often preferred for comparing models with different numbers of predictors.

### Coefficient of Determination (R-squared) - Formula
*   $$R^2 = \\frac{SSR}{SST} = 1 - \\frac{SSE}{SST}$$
    Where:
    *   $SST = \\sum(y_i - \\bar{y})^2$ (Total Sum of Squares: total variability in $y$)
    *   $SSR = \\sum(\\hat{y}_i - \\bar{y})^2$ (Regression Sum of Squares: variability explained by the model)
    *   $SSE = \\sum(y_i - \\hat{y}_i)^2$ (Error Sum of Squares: unexplained variability)
    *   $SST = SSR + SSE$

# Multicollinearity

## Multicollinearity - Definition
A phenomenon in multiple linear regression where two or more independent variables are highly correlated with each other.

## Multicollinearity - Key Insights
*   High multicollinearity does not violate OLS assumptions but makes it difficult to disentangle the individual effects of the correlated predictors on the dependent variable.
*   Consequences can include:
    *   Unstable and unreliable estimates of individual regression coefficients (large standard errors).
    *   Difficulty in interpreting coefficients as the unique effect of one variable.
    *   Coefficients might have unexpected signs or magnitudes.
*   Detection methods include:
    *   Examining the correlation matrix of independent variables (rule of thumb: correlations > 0.7 or 0.8 might indicate issues).
    *   Calculating the **Variance Inflation Factor (VIF)** for each predictor. A common rule of thumb is that VIF > 10 suggests problematic multicollinearity.

## Multicollinearity - Formula
*   $$VIF_j = \\frac{1}{1 - R_j^2}$$
    Where $R_j^2$ is the R-squared value obtained by regressing the j-th independent variable ($x_j$) on all other independent variables in the model.

# Conclusion

Multiple Linear Regression (MLR) provides a powerful framework for modeling how multiple factors linearly influence an outcome variable. Coefficients are estimated using Ordinary Least Squares (OLS), quantifying the effect of each predictor while controlling for others. The overall model adequacy is checked using the F-test, while individual predictor significance is assessed via t-tests. Evaluating model fit with R-squared and validating assumptions through residual analysis are critical steps, alongside diagnosing potential issues like multicollinearity using VIF to ensure reliable interpretation and prediction.
    `
},
'8-1':{
    title: 'Multiple Linear Regression II',
    content: `
# Core Concepts

*   Multiple Linear Regression (MLR) can incorporate **qualitative (categorical) independent variables** through the use of **dummy variables**.
*   A categorical variable with $k$ levels requires $k-1$ dummy variables for inclusion in the model, with one level serving as the **baseline category** for comparison.
*   The coefficients of dummy variables represent the **average difference in the dependent variable** between the represented category and the baseline category, holding other predictors constant.
*   **Interaction terms**, created by multiplying two or more independent variables, allow the model to capture **conditional relationships**, where the effect of one predictor on the dependent variable depends on the value of another predictor.
*   Interpreting models with interaction terms requires considering the coefficients of the main effects and the interaction term together.

# Key Terms Definitions

*   **Categorical Variable:** A variable that can take on one of a limited, and usually fixed, number of possible values, assigning each individual or other unit of observation to a particular group or nominal category.
*   **Dummy Variable:** A numerical variable (typically binary 0 or 1) used in regression analysis to represent subgroups of the sample (categories of a qualitative variable).
*   **Baseline Category (Reference Category):** The category of a qualitative variable for which all associated dummy variables are set to zero. Coefficients of other categories are interpreted relative to this baseline.
*   **Interaction Variable (Interaction Term):** A variable created by multiplying two or more independent variables. It represents the combined effect or interaction between those variables on the dependent variable.

# Categorical Variables in MLR

## Categorical Variables in MLR - Definition
The extension of Multiple Linear Regression to include independent variables that are qualitative or categorical in nature.

## Categorical Variables in MLR - Key Insights
*   Categorical variables must be numerically coded for regression analysis, typically via dummy variables.
*   For a categorical variable with $k$ distinct levels (categories), $k-1$ binary (0/1) dummy variables are created.
*   One level is implicitly chosen as the baseline/reference category (coded as 0 for all $k-1$ dummy variables).
*   The regression intercept ($b_0$) represents the expected value of the dependent variable for the baseline category when all other numerical predictors are zero.
*   The coefficient ($b_i$) associated with a specific dummy variable represents the estimated average difference in the dependent variable between the category represented by that dummy variable and the baseline category, *ceteris paribus* (holding all other variables constant).

## Categorical Variables in MLR - Examples
*   **Two Categories (Brand: Lenovo vs. Dell):** Create one dummy variable, \`Is_Lenovo\`.
    *   \`Is_Lenovo = 1\` if Brand is Lenovo.
    *   \`Is_Lenovo = 0\` if Brand is Dell (Baseline).
    *   The coefficient for \`Is_Lenovo\` estimates the average difference in the dependent variable (e.g., satisfaction) between Lenovo and Dell.
*   **Three Categories (Brand: Lenovo, Dell, Asus):** Create two dummy variables, e.g., \`Is_Lenovo\` and \`Is_Dell\`, with Asus as the baseline.
    *   Asus: \`Is_Lenovo = 0\`, \`Is_Dell = 0\` (Baseline)
    *   Lenovo: \`Is_Lenovo = 1\`, \`Is_Dell = 0\`
    *   Dell: \`Is_Lenovo = 0\`, \`Is_Dell = 1\`
    *   The coefficient for \`Is_Lenovo\` estimates the average difference between Lenovo and Asus.
    *   The coefficient for \`Is_Dell\` estimates the average difference between Dell and Asus.
*   **Location (Premium vs. Non-Premium):** Create one dummy variable, \`Is_Premium\`.
    *   \`Is_Premium = 1\` if location is premium.
    *   \`Is_Premium = 0\` if location is non-premium (Baseline).
    *   In a model predicting flat price based on area and location (Price = $b_0 + b_1 \\cdot Area + b_2 \\cdot Is\\_Premium$), $b_2$ estimates the average price difference between premium and non-premium flats *of the same area*.

## Categorical Variables in MLR - Formula
*   Model with one categorical variable (k=3 levels, baseline=level 1) and one numerical variable ($x_1$):
    $$\\hat{y} = b_0 + b_1 x_1 + b_2 \\cdot Dummy_2 + b_3 \\cdot Dummy_3$$
    Where:
    *   $Dummy_2 = 1$ if category 2, 0 otherwise.
    *   $Dummy_3 = 1$ if category 3, 0 otherwise.
    *   Category 1 is the baseline ($Dummy_2=0$, $Dummy_3=0$).
    *   $b_2$ = Estimated difference in $\\hat{y}$ between category 2 and baseline (category 1).
    *   $b_3$ = Estimated difference in $\\hat{y}$ between category 3 and baseline (category 1).

# Interaction Variables in MLR

## Interaction Variables in MLR - Definition
Variables created by multiplying two or more independent variables (numerical $\\times$ numerical, categorical $\\times$ categorical, or numerical $\\times$ categorical) to model how their combined presence affects the dependent variable differently than their individual effects alone.

## Interaction Variables in MLR - Key Insights
*   Interaction terms allow the effect of one independent variable ($X_1$) on the dependent variable ($Y$) to *change* depending on the level or value of another independent variable ($X_2$).
*   If an interaction term is significant, the effects of the individual variables involved in the interaction cannot be interpreted in isolation. The effect of $X_1$ is now dependent on $X_2$'s value, and vice versa.
*   Categorical variables involved in interactions can act as **moderators**, changing the relationship between another predictor and the outcome.

## Interaction Variables in MLR - Examples
*   **Numerical $\\times$ Categorical (Work Experience $\\times$ Gender):**
    *   Model: Salary = $b_0 + b_1\\cdot Experience + b_2 \\cdot Is\\_Female + b_3 \\cdot (Experience \\times Is\\_Female)$
    *   Here, \`Is_Female\` is a dummy variable (1 if Female, 0 if Male - baseline).
    *   The term $b_3 \\cdot (Experience \\times Is\\_Female)$ captures whether the impact of an additional year of experience ($b_1 + b_3 \\cdot Is\\_Female$) on salary differs between females ($b_1 + b_3$) and males ($b_1$). A significant $b_3$ indicates an interaction effect.
*   **Applications:**
    *   **E-commerce:** Interaction between time of day and past purchase history influencing ad click-through rates.
    *   **Medicine:** Interaction between a specific gene variant (categorical) and lifestyle factor (e.g., smoking, numerical/categorical) affecting disease risk or drug response.

## Interaction Variables in MLR - Formula
*   Model with two numerical variables ($x_1, x_2$) and their interaction:
    $$\\hat{y} = b_0 + b_1 x_1 + b_2 x_2 + b_3 (x_1 \\cdot x_2)$$
    *   The effect of a one-unit change in $x_1$ on $\\hat{y}$ is $b_1 + b_3 x_2$. This effect depends on the value of $x_2$.
*   Model with one numerical ($x_1$) and one categorical (\`Dummy_1\`, baseline=0) and their interaction:
    $$\\hat{y} = b_0 + b_1 x_1 + b_2 \\cdot Dummy_1 + b_3 (x_1 \\cdot Dummy_1)$$
    *   Effect of $x_1$ when \`Dummy_1=0\` (baseline category): $b_1$
    *   Effect of $x_1$ when \`Dummy_1=1\` (other category): $b_1 + b_3$
    *   $b_3$ represents the *difference* in the effect of $x_1$ between the two categories.

# Conclusion

Incorporating categorical variables via dummy coding and interaction terms significantly enhances the flexibility and realism of Multiple Linear Regression models. These techniques allow analysts to quantify the impact of qualitative factors and to model complex scenarios where the effect of one predictor is conditional upon another. Mastering the creation and interpretation of dummy and interaction variables enables more nuanced data analysis, leading to better-informed business strategies and decisions.
    `
},

};

export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return bseNotes[key as keyof typeof bseNotes];
}