export const bseTests = {

'1-2':{
    title: 'Descriptive Statistics Test',
    description: 'Test your knowledge on calculating and interpreting basic descriptive statistics.',
    questions: [
      {
        id: 1,
        question: 'What is the primary purpose of descriptive statistics as outlined in the module?',
        options: [
          'To test hypotheses about population parameters based on sample data.',
          'To organize, summarize, and present data in an informative way.',
          'To determine the cause-and-effect relationship between variables.',
          'To calculate the probability of future outcomes based on past data.'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'A dataset containing information on customer gender (Male/Female) and satisfaction level (Low/Medium/High) includes which types of data?',
        options: [
          'Two quantitative variables.',
          'Two qualitative variables (Nominal and Ordinal).',
          'One qualitative (Ratio) and one quantitative (Interval) variable.',
          'One quantitative (Nominal) and one qualitative (Ordinal) variable.'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which level of measurement allows for meaningful ordering of categories but does not guarantee equal intervals between them, nor does it have a true zero point?',
        options: [
          'Nominal',
          'Ordinal',
          'Interval',
          'Ratio'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'According to the notes, which type of chart is specifically mentioned as suitable for visualizing the frequency distribution of quantitative data by dividing it into classes?',
        options: [
          'Pie Chart',
          'Bar Chart',
          'Scatter Plot',
          'Histogram'
        ],
        correctAnswer: 4
      },
      {
        id: 5,
        question: 'Which measure of central tendency is described as being robust to extreme values or outliers?',
        options: [
          'Mean',
          'Median',
          'Mode',
          'Range'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'What does the Interquartile Range (IQR) measure?',
        options: [
          'The difference between the largest and smallest values in the dataset.',
          'The average squared distance of observations from the mean.',
          'The spread of the middle 50% of the data (Q3 - Q1).',
          'The most frequently occurring value in the dataset.'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'The Five Number Summary, often visualized with a Box Plot, consists of which set of statistics?',
        options: [
          'Mean, Median, Mode, Min, Max',
          'Min, Q1, Median, Q3, Max',
          'Min, Mean, Median, Standard Deviation, Max',
          'Q1, Q2, Q3, IQR, Range'
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'What fundamental concept in probability provides a numerical measure of the likelihood that an event will occur?',
        options: [
          'Sample Space',
          'Random Experiment',
          'Probability',
          'Event'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'A Z-score is used to:',
        options: [
          'Calculate the average value of a dataset.',
          'Determine the most frequent observation.',
          'Measure how many standard deviations an observation is away from the mean.',
          'Visualize the relationship between two categorical variables.'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'Data collected by surveying customer satisfaction levels across different store locations at a single point in time (e.g., during December) is best described as:',
        options: [
          'Time Series Data',
          'Ratio Data',
          'Cross-Sectional Data',
          'Experimental Data'
        ],
        correctAnswer: 3
      }

    ]
},
'2-2':{
    title: 'Discrete Probability Test',
    description: 'Assess your understanding of discrete random variables and their probability distributions.',
    questions: [
      {
        id: 1,
        question: 'What does a Random Variable (RV) fundamentally represent?',
        options: [
          'A fixed numerical value',
          'The probability of an event occurring',
          'A function mapping outcomes of a random phenomenon to numerical values',
          'The average outcome of an experiment'
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: 'What is the primary difference between a Probability Mass Function (PMF) and a Cumulative Distribution Function (CDF) for a discrete RV?',
        options: [
          'PMF gives P(X=x), CDF gives P(X>x)',
          'PMF gives P(X≤x), CDF gives P(X=x)',
          'PMF gives P(X=x), CDF gives P(X≤x)',
          'PMF sums to 1, CDF sums to infinity'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'The Expectation (E[X]) of a discrete random variable represents its:',
        options: [
          'Most likely value',
          'Weighted average value, weighted by probabilities',
          'Measure of spread or dispersion',
          'Maximum possible value'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Which distribution models a single trial with only two possible outcomes (e.g., success/failure)?',
        options: [
          'Poisson',
          'Binomial',
          'Normal',
          'Bernoulli'
        ],
        correctAnswer: 4
      },
      {
        id: 5,
        question: 'A Binomial distribution B(n, p) describes:',
        options: [
          'The number of trials needed to get n successes',
          'The rate of events occurring in an interval',
          'The number of successes in n independent Bernoulli trials with success probability p',
          'The probability of a single success in n trials'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'Which distribution is characterized by its parameter λ, representing the average rate of event occurrences in a fixed interval?',
        options: [
          'Bernoulli',
          'Binomial',
          'Poisson',
          'Geometric'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'If Y follows a Bernoulli distribution with parameter p, what is its variance, Var(Y)?',
        options: [
          'p',
          'np',
          'p(1-p)',
          'np(1-p)'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'A key characteristic of the Poisson distribution with parameter λ is that:',
        options: [
          'Its mean is λ and variance is λ²',
          'Its mean is λ and variance is λ',
          'Its mean is np and variance is npq',
          'It only applies to experiments with a fixed number of trials'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'If X₁, ..., Xₙ are independent Bernoulli(p) random variables, their sum S = ΣXᵢ follows which distribution?',
        options: [
          'Bernoulli(np)',
          'Poisson(np)',
          'Binomial(n, p)',
          'Normal(np, np(1-p))'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'A call center receives an average of 5 calls per hour. Which distribution best models the number of calls received in a specific hour?',
        options: [
          'Bernoulli(p=5)',
          'Binomial(n= ?, p= ?)',
          'Poisson(λ=5)',
          'Uniform(0, 5)'
        ],
        correctAnswer: 3
      }

    ]
},
'3-2':{
    title: 'Continuous Probability Test',
    description: 'Test your knowledge on continuous probability distributions, particularly the Normal distribution.',
    questions: [
      {
        id: 1,
        question: 'What is a key difference between continuous and discrete probability distributions?',
        options: [
          'Continuous distributions use summation for expected value, while discrete use integration.',
          'The probability of a continuous variable taking a specific single value is zero.',
          'Continuous variables have a finite number of possible outcomes.',
          'Discrete distributions are always bell-shaped.'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'What does the area under the curve of a Probability Density Function (PDF) between two points represent?',
        options: [
          'The expected value of the variable.',
          'The variance of the variable.',
          'The probability that the variable falls within that interval.',
          'The cumulative probability up to the second point.'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'Which distribution is characterized by all values within a given range [a, b] being equally likely?',
        options: [
          'Normal Distribution',
          'Exponential Distribution',
          'Uniform Distribution',
          't-Distribution'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'The Exponential Distribution is often used to model what?',
        options: [
          'The number of successes in a fixed number of trials.',
          'The time until an event occurs in a Poisson process.',
          'The distribution of sample means from any population.',
          'Errors in measurement that are symmetrically distributed.'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What is the mean (Expected Value) of an Exponential Distribution with rate parameter λ?',
        options: [
          'λ',
          'λ²',
          '1 / λ',
          'sqrt(1 / λ)'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'Which continuous distribution is fundamental in statistics due to the Central Limit Theorem and is characterized by a symmetric, bell-shaped curve?',
        options: [
          'F-distribution',
          'Chi-Square Distribution',
          'Exponential Distribution',
          'Normal Distribution'
        ],
        correctAnswer: 4
      },
      {
        id: 7,
        question: 'What are the mean and standard deviation of the Standard Normal Distribution?',
        options: [
          'Mean = 1, Standard Deviation = 0',
          'Mean = 0, Standard Deviation = 1',
          'Mean = 0, Standard Deviation = unknown',
          'Mean = μ, Standard Deviation = σ'
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'Under what conditions can the Normal distribution be used to approximate the Binomial distribution?',
        options: [
          'When n is small and p is close to 0.5',
          'Always, regardless of n and p',
          'When n * p ≥ 5 and n * (1 - p) ≥ 5',
          'When the sample size equals the population size'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'The Chi-Square (χ²) distribution is commonly used for which statistical test?',
        options: [
          'Comparing the means of two small samples.',
          'Testing the equality of variances between two populations.',
          'Performing Goodness-of-Fit tests or tests of independence.',
          'Modeling the time between random events.'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'When is the t-Distribution particularly essential compared to the Normal distribution?',
        options: [
          'When dealing with large sample sizes.',
          'When comparing variances of multiple populations.',
          'When the population standard deviation is known.',
          'For hypothesis testing with small sample sizes and unknown population standard deviation.'
        ],
        correctAnswer: 4
      }

    ]
},
'4-2':{
    title: 'Sampling Distributions Test',
    description: 'Check your understanding of sampling techniques and the properties of sampling distributions.',
    questions: [
      {
        id: 1,
        question: 'What is the primary goal of statistical inference?',
        options: [
          'To describe the characteristics of a specific sample in detail',
          'To eliminate all potential errors in data collection',
          'To use sample data to draw conclusions about a larger population',
          'To calculate population parameters directly without sampling'
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: 'Which of the following correctly distinguishes between a population parameter and a sample statistic?',
        options: [
          'A parameter is calculated from sample data, while a statistic describes the population',
          'A parameter is typically denoted by Roman letters (e.g., x-bar), while a statistic uses Greek letters (e.g., mu)',
          'A parameter is a fixed characteristic of the population (e.g., μ), while a statistic is calculated from a sample and varies (e.g., x̄)',
          'A parameter estimates a statistic'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'Which sampling method involves dividing the population into subgroups based on shared characteristics and then randomly sampling from EACH subgroup?',
        options: [
          'Simple Random Sampling',
          'Cluster Sampling',
          'Stratified Sampling',
          'Convenience Sampling'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'What is a sampling distribution?',
        options: [
          'The distribution of individual data points within the population',
          'The way data is distributed within a single collected sample',
          'The probability distribution of a sample statistic (like the mean) calculated from all possible samples of a given size',
          'A list of all elements included in the sampling frame'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'The Central Limit Theorem (CLT) is important in statistics because it states that:',
        options: [
          'All populations follow a normal distribution if the population size is large enough',
          'The sampling distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the population shape',
          'The standard error of the mean is always equal to the population standard deviation',
          'Sampling error can be completely eliminated with a large enough sample size'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'If the expected value of a sample statistic (point estimator) is equal to the population parameter it estimates, the estimator is said to be:',
        options: [
          'Efficient',
          'Consistent',
          'Sufficient',
          'Unbiased'
        ],
        correctAnswer: 4
      },
      {
        id: 7,
        question: 'The standard error of the sample mean ($SE(\bar{x})$) is calculated as:',
        options: [
          'σ * √n',
          'σ / n',
          'σ / √n',
          'μ / √n'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'Errors that occur during data collection, recording, or processing, which are unrelated to the act of sampling itself, are known as:',
        options: [
          'Sampling Error',
          'Standard Error',
          'Non-sampling Error',
          'Consistency Error'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'Which property of a point estimator refers to its tendency to get closer to the population parameter as the sample size increases?',
        options: [
          'Unbiasedness',
          'Efficiency',
          'Consistency',
          'Sufficiency'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'How does increasing the sample size (n) generally affect sampling error?',
        options: [
          'It increases sampling error',
          'It has no impact on sampling error',
          'It transforms sampling error into non-sampling error',
          'It decreases sampling error'
        ],
        correctAnswer: 4
      }

    ]
},
'5-2':{
    title: 'Statistical Inference Test',
    description: 'Test your ability to construct confidence intervals and perform basic hypothesis tests.',
    questions: [
      {
        id: 1,
        question: 'What is the primary goal of statistical inference as described in the module?',
        options: [
          'To calculate exact values for population parameters using sample data.',
          'To describe sample data using summary statistics like mean and standard deviation.',
          'To use sample data to draw conclusions about unknown population characteristics.',
          'To collect large amounts of data from the entire population.'
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: 'Which of the following best defines a Confidence Interval (CI)?',
        options: [
          'A single value estimate of a population parameter.',
          'A formal procedure to test claims about population parameters.',
          'A range of values derived from sample data likely to contain the true population parameter.',
          'The probability of making a Type I error in hypothesis testing.'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'According to the notes, how does increasing the sample size (n) generally affect the width of a confidence interval, assuming other factors remain constant?',
        options: [
          'It makes the interval wider.',
          'It makes the interval narrower.',
          'It has no effect on the interval width.',
          'It only affects the center of the interval, not the width.'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'In hypothesis testing, what is the Null Hypothesis (H₀)?',
        options: [
          'The statement the researcher seeks evidence to support.',
          'The conclusion drawn from the sample data.',
          'A statement about a population parameter assumed true initially, representing the status quo.',
          'The range of possible values for the test statistic.'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'What does the Significance Level (α) represent in hypothesis testing?',
        options: [
          'The probability that the null hypothesis is true.',
          'The probability of correctly accepting the null hypothesis.',
          'The confidence level associated with the test.',
          'The maximum acceptable probability of incorrectly rejecting a true null hypothesis (Type I error).'
        ],
        correctAnswer: 4
      },
      {
        id: 6,
        question: 'In hypothesis testing, the decision rule based on the p-value and significance level (α) is typically:',
        options: [
          'If p-value > α, reject H₀.',
          'If p-value ≤ α, reject H₀.',
          'If p-value = α, the test is inconclusive.',
          'If p-value ≤ α, fail to reject H₀.'
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'An entrepreneur wants to estimate the percentage of potential customers interested in a new feature. Which population parameter is most relevant here?',
        options: [
          'Population mean (μ)',
          'Population variance (σ²)',
          'Population proportion (p)',
          'Sample size (n)'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'If a 95% confidence interval for the average customer spending is calculated as [$50, $70], what is the correct interpretation?',
        options: [
          '95% of customers spend between $50 and $70.',
          'There is a 95% probability that the sample mean falls between $50 and $70.',
          'We are 95% confident that the true average spending for all customers lies between $50 and $70.',
          'The sample mean is $60 with a 5% margin of error.'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'A company wants to test if the variance (σ²) in production time has changed from the historical value of 15 minutes². What are the correct null (H₀) and alternate (H<0xE2><0x82><0x90>) hypotheses?',
        options: [
          'H₀: σ² ≠ 15, H<0xE2><0x82><0x90>: σ² = 15',
          'H₀: σ² = 15, H<0xE2><0x82><0x90>: σ² ≠ 15',
          'H₀: σ² ≥ 15, H<0xE2><0x82><0x90>: σ² < 15',
          'H₀: σ² ≤ 15, H<0xE2><0x82><0x90>: σ² > 15'
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        question: 'What is the general structure used to construct a confidence interval for a population mean or proportion?',
        options: [
          'Significance Level ± Margin of Error',
          'Point Estimate ± Margin of Error',
          'Sample Size ± Point Estimate',
          'Margin of Error ± Standard Deviation'
        ],
        correctAnswer: 2
      }

    ]
},
'6-2':{
    title: 'Simple Regression Test',
    description: 'Assess your understanding of correlation and the components of a simple linear regression model.',
    questions: [
      {
        id: 1,
        question: 'What is a key difference between the covariance and the correlation coefficient when describing the linear relationship between two variables?',
        options: [
          'Covariance measures strength, while correlation measures only direction.',
          'Correlation is a standardized, unit-free measure (-1 to +1), while covariance value depends on the units of the variables.',
          'Only covariance can indicate a positive relationship.',
          'Correlation must be positive, while covariance can be positive or negative.'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'In Simple Linear Regression (SLR), what does the term E(y) = β₀ + β₁x represent?',
        options: [
          'An individual observed value of y for a given x.',
          'The random error term for a specific observation.',
          'The estimated value of y predicted by the sample regression line.',
          'The average value of the dependent variable y on the true population regression line for a given x.'
        ],
        correctAnswer: 4
      },
      {
        id: 3,
        question: 'The Ordinary Least Squares (OLS) method is used in SLR to estimate the intercept (b₀) and slope (b₁) by:',
        options: [
          'Maximizing the R-square value.',
          'Minimizing the sum of the squared residuals (differences between observed y and predicted y).',
          'Minimizing the absolute value of the residuals.',
          'Ensuring the correlation coefficient is exactly 1 or -1.'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'What is the primary purpose of conducting a test of significance for the slope coefficient (β₁) in SLR?',
        options: [
          'To calculate the exact value of the slope in the population.',
          'To determine if the intercept is zero.',
          'To assess whether the observed linear relationship in the sample is statistically meaningful or likely due to chance.',
          'To check if the residuals are normally distributed.'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'Residual analysis in regression is crucial for which of the following?',
        options: [
          'Calculating the correlation coefficient.',
          'Estimating the regression parameters b₀ and b₁.',
          'Validating the underlying assumptions of the regression model, such as constant variance and independence of errors.',
          'Determining the total sum of squares (SST).'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'What does an ideal residual plot (residuals vs. predicted values) typically look like if the SLR model assumptions are met?',
        options: [
          'A distinct curve shape.',
          'A funnel shape, widening or narrowing from left to right.',
          'A random scatter of points horizontally banded around zero with no discernible pattern.',
          'All points lying perfectly on the zero line.'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'The R-square (Coefficient of Determination) statistic measures:',
        options: [
          'The standard deviation of the residuals.',
          'The probability that the slope coefficient is zero.',
          'The proportion of the total variance in the dependent variable (y) that is explained by the linear model with the independent variable (x).',
          'The average difference between observed and predicted values.'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'According to the notes, which formula correctly relates the Total Sum of Squares (SST), Regression Sum of Squares (SSR), and Error Sum of Squares (SSE)?',
        options: [
          'SSR = SST + SSE',
          'SSE = SST + SSR',
          'SST = SSR * SSE',
          'SST = SSR + SSE'
        ],
        correctAnswer: 4
      },
      {
        id: 9,
        question: 'What do residuals (εᵢ) represent in the context of Simple Linear Regression?',
        options: [
          'The estimated slope of the regression line.',
          'The difference between the observed value (yᵢ) and the predicted value (ŷᵢ) for each data point.',
          'The average value of the dependent variable.',
          'The correlation between the independent and dependent variables.'
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        question: 'A common null hypothesis tested in SLR significance testing is H₀: β₁ = 0. What does rejecting this null hypothesis suggest?',
        options: [
          'There is no linear relationship between x and y.',
          'The intercept (β₀) must also be zero.',
          'There is statistically significant evidence of a linear relationship between the independent variable (x) and the dependent variable (y).',
          'The R-square value is equal to 1.'
        ],
        correctAnswer: 3
      }

    ]
},
'7-2':{
    title: 'Multiple Regression Basics Test',
    description: 'Test your knowledge on setting up and interpreting basic multiple regression models.',
    questions: [
      {
        id: 1,
        question: 'What distinguishes Multiple Linear Regression (MLR) from Simple Linear Regression?',
        options: [
          'MLR uses Ordinary Least Squares (OLS) while Simple Linear Regression does not',
          'MLR models the relationship between one dependent variable and two or more independent variables',
          'MLR can only be used for prediction, not understanding variable contributions',
          'MLR does not require residual analysis'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'In the estimated MLR equation `ŷ = b₀ + b₁x₁ + b₂x₂`, what is the interpretation of `b₁`?',
        options: [
          'The value of ŷ when x₁ is 1',
          'The total effect of x₁ on ŷ',
          'The change in ŷ for a one-unit increase in x₁, holding x₂ constant',
          'The correlation between x₁ and ŷ'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'What is the primary goal of the Ordinary Least Squares (OLS) method in estimating MLR coefficients?',
        options: [
          'To maximize the number of significant predictors',
          'To minimize the sum of squared differences between observed and predicted values (SSE)',
          'To ensure all residuals are positive',
          'To maximize the Variance Inflation Factor (VIF)'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'The overall significance of an MLR model (testing if at least one independent variable has a non-zero coefficient) is typically assessed using:',
        options: [
          'The t-test for the intercept',
          'The Variance Inflation Factor (VIF)',
          'Residual analysis plots',
          'The F-test'
        ],
        correctAnswer: 4
      },
      {
        id: 5,
        question: 'What does a statistically significant t-test for a specific coefficient `bᵢ` (associated with variable `xᵢ`) suggest?',
        options: [
          'The overall model (F-test) must also be significant',
          'There is no multicollinearity involving `xᵢ`',
          'The variable `xᵢ` makes a significant contribution to predicting the dependent variable, controlling for other variables in the model',
          'R-squared is greater than 0.5'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'What information does the R-squared value provide in an MLR context?',
        options: [
          'The probability that the model predictions are correct',
          'The number of independent variables included in the model',
          'The proportion of the variance in the dependent variable explained by the independent variables',
          'Whether the error terms are normally distributed'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'Residual analysis in MLR is crucial for:',
        options: [
          'Calculating the exact values of the regression coefficients',
          'Determining the significance level for the F-test',
          'Validating the assumptions of the linear regression model (e.g., linearity, constant variance)',
          'Measuring the degree of multicollinearity'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'Multicollinearity refers to a situation where:',
        options: [
          'The dependent variable is highly correlated with the error term',
          'The error terms are not normally distributed',
          'Two or more independent variables in the model are highly correlated with each other',
          'The R-squared value is close to zero'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'What is the purpose of calculating the Variance Inflation Factor (VIF) for each predictor in an MLR model?',
        options: [
          'To test the overall significance of the model',
          'To estimate the standard error of the intercept',
          'To quantify the severity of multicollinearity associated with that predictor',
          'To determine the R-squared value'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'Which of the following is a common consequence of high multicollinearity in an MLR model?',
        options: [
          'The F-statistic becomes very small and insignificant',
          'R-squared decreases substantially',
          'Estimates of individual regression coefficients become unstable and difficult to interpret reliably',
          'Residual plots show perfect random scatter'
        ],
        correctAnswer: 3
      }

    ]
},
'8-2':{
    title: 'Advanced Multiple Regression Test',
    description: 'Assess your understanding of diagnosing issues and refining multiple regression models.',
    questions: [
      {
        id: 1,
        question: 'If a categorical independent variable, like \'Product Category\', has 4 distinct levels (e.g., Electronics, Apparel, Home Goods, Groceries), how many dummy variables are typically needed to represent it in a multiple linear regression model?',
        options: [
          '1',
          '4',
          '3',
          '2'
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: 'In the context of dummy variables for a categorical predictor, what is the \'baseline category\'?',
        options: [
          'The category with the highest frequency in the data.',
          'The category represented when all associated dummy variables are equal to 0.',
          'The category represented by the dummy variable with the coefficient closest to zero.',
          'The category that is excluded from the analysis.'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Consider the model: `Sales = b₀ + b₁*Advertising + b₂*Is_Holiday`, where `Is_Holiday` is a dummy variable (1 if holiday, 0 otherwise). What does the coefficient `b₂` estimate?',
        options: [
          'The average sales during non-holidays.',
          'The average increase in sales for each unit increase in Advertising.',
          'The average sales during holidays.',
          'The average difference in Sales between a holiday and a non-holiday, holding Advertising constant.'
        ],
        correctAnswer: 4
      },
      {
        id: 4,
        question: 'What is the primary purpose of including interaction terms in a multiple linear regression model?',
        options: [
          'To simplify the model by reducing the number of predictors.',
          'To ensure all predictors have a linear relationship with the dependent variable.',
          'To model situations where the effect of one independent variable on the dependent variable depends on the value of another independent variable.',
          'To automatically select the baseline category for dummy variables.'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'In a model `ŷ = b₀ + b₁x₁ + b₂*Dummy₂ + b₃(x₁*Dummy₂)`, where `Dummy₂` is 1 for category A and 0 for category B (baseline), what expression represents the effect of a one-unit increase in `x₁` on `ŷ` specifically for category A?',
        options: [
          'b₁',
          'b₁ + b₂',
          'b₁ + b₃',
          'b₃'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'A researcher models student test scores based on hours studied (`Hours`) and teaching method (`Method`, coded as 1 for New Method, 0 for Standard Method - baseline). The model is `Score = 50 + 5*Hours + 10*Method + 2*(Hours*Method)`. What is the estimated score for a student who studied 10 hours using the New Method?',
        options: [
          '100 (50 + 5*10)',
          '110 (50 + 5*10 + 10*1)',
          '120 (50 + 5*10 + 10*1 + 2*10*1)',
          '130 (50 + 10*10 + 10*1 + 2*10*1)'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'If a regression model includes a significant interaction term between `Experience` (numerical) and `Gender` (categorical), what can be concluded?',
        options: [
          'Experience is not a significant predictor of the outcome.',
          'Gender is not a significant predictor of the outcome.',
          'The relationship between Experience and the outcome is the same for all genders.',
          'The effect of Experience on the outcome differs depending on Gender.'
        ],
        correctAnswer: 4
      },
      {
        id: 8,
        question: 'What is a numerical variable, often binary (0 or 1), used in regression to represent subgroups or categories of a qualitative variable called?',
        options: [
          'Interaction Variable',
          'Dependent Variable',
          'Dummy Variable',
          'Residual Variable'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'How is an interaction variable typically created in a regression model?',
        options: [
          'By taking the logarithm of an existing variable.',
          'By subtracting one independent variable from another.',
          'By multiplying two or more independent variables together.',
          'By assigning ranks based on the values of an independent variable.'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'Consider the example `Price = b₀ + b₁*Area + b₂*Is_Premium`, where `Is_Premium=1` for premium location and 0 for non-premium (baseline). `b₀` represents the estimated average price for:',
        options: [
          'A premium flat with zero area.',
          'A non-premium flat with zero area.',
          'Any flat with zero area.',
          'The average price difference due to location.'
        ],
        correctAnswer: 2
      }

    ]
},

};

export function getTest(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return bseTests[key as keyof typeof bseTests];
}