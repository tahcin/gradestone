export const asbTests = {

'1-2':{
    title: 'Non-Parametric Methods Assessment',
    description: 'Test your understanding of non-parametric statistical methods and their applications in real business scenarios.',
    questions: [
      {
        id: 1,
        question: 'What is the primary distinction between parametric and non-parametric statistical tests?',
        options: [
          'Parametric tests use ranks, while non-parametric tests use actual data values.',
          'Parametric tests assume data follows a specific distribution, while non-parametric tests are distribution-free.',
          'Non-parametric tests are only suitable for large sample sizes.',
          'Parametric tests are used for categorical data, while non-parametric tests are for continuous data.'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'Non-parametric methods often rely on which aspect of the data instead of the actual values?',
        options: [
          'The mean and variance of the data.',
          'The estimated population parameters.',
          'The relative position or ranks of the data points.',
          'The assumption of a normal distribution.'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'What is the main purpose of the Chi-Square Test of Independence?',
        options: [
          'To test if a sample median significantly differs from a hypothesized value.',
          'To determine if sample data fits a specific theoretical distribution.',
          'To assess if a statistically significant association exists between two categorical variables.',
          'To compare the means of two independent groups.'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'The Chi-Square test statistic (for both Independence and Goodness of Fit) quantifies the discrepancy between which two types of frequencies?',
        options: [
          'Observed frequencies and Rank frequencies.',
          'Expected frequencies and Median frequencies.',
          'Observed frequencies and Expected frequencies.',
          'Sample frequencies and Population frequencies.'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'Which non-parametric test is used to determine how well observed sample data conforms to a hypothesized theoretical probability distribution (like uniform or Poisson)?',
        options: [
          'Wilcoxon Signed Rank Test',
          'Chi-Square Test of Independence',
          'Goodness of Fit Test',
          'Parametric T-test'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'How must continuous data be handled before applying a Chi-Square test (either Independence or Goodness of Fit)?',
        options: [
          'It must be transformed using logarithms.',
          'It must be grouped into categories or intervals.',
          'It must be converted to ranks.',
          'It can be used directly without modification.'
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'The Wilcoxon Signed Rank Test is primarily used to test hypotheses about which measure of central tendency?',
        options: [
          'The mean',
          'The mode',
          'The standard deviation',
          'The median'
        ],
        correctAnswer: 4
      },
      {
        id: 8,
        question: 'Which elements are crucial for calculating the Wilcoxon Signed Rank test statistic?',
        options: [
          'Observed and Expected frequencies.',
          'The ranks of the absolute differences and the signs of the original differences.',
          'The means and standard deviations of the groups.',
          'Contingency table totals.'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'In which situation are non-parametric tests particularly valuable alternatives to parametric tests?',
        options: [
          'When the data perfectly follows a normal distribution.',
          'When population parameters need to be estimated accurately.',
          'When the assumptions of parametric tests (like normality) are violated.',
          'When working exclusively with very large sample sizes.'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'What does the null hypothesis (H0) typically state in a Chi-Square Test of Independence?',
        options: [
          'The two categorical variables are dependent.',
          'The sample data perfectly fits the expected distribution.',
          'The two categorical variables are independent.',
          'The median difference between paired observations is zero.'
        ],
        correctAnswer: 3
      }

    ]
},
'2-2':{
    title: 'Advanced Regression Analysis Test',
    description: 'Apply advanced regression techniques to complex business problems and interpret the results.',
    questions: [
      {
        id: 1,
        question: 'Why are advanced regression methods primarily used over simple linear regression?',
        options: [
          'To handle datasets with only linear relationships',
          'To address issues like non-linearity, multicollinearity, and overfitting in complex data',
          'Because they require less computational power',
          'To strictly model data with normally distributed errors'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'What is multicollinearity in the context of regression models?',
        options: [
          'When the dependent variable is highly correlated with one predictor',
          'When the model perfectly fits the training data but performs poorly on new data',
          'When two or more predictor variables are highly correlated with each other',
          'When the relationship between predictors and the outcome is non-linear'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'Which advanced regression technique is specifically designed to model curved, non-linear relationships by adding terms like squared or cubed independent variables?',
        options: [
          'Logistic Regression',
          'Ridge Regression',
          'Polynomial Regression',
          'Stepwise Selection'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Logistic regression is most appropriately used when the dependent variable is:',
        options: [
          'Continuous and normally distributed',
          'Categorical with multiple unordered levels',
          'Binary (e.g., 0/1, yes/no)',
          'A count of events'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'Ridge and Lasso regression are primarily used for which purpose?',
        options: [
          'Modeling non-linear relationships using curves',
          'Handling multicollinearity and preventing overfitting through regularization',
          'Comparing the means of two groups using dummy variables',
          'Predicting binary outcomes based on log odds'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'Which variable selection method starts with no predictors and iteratively adds the most statistically significant variable at each step?',
        options: [
          'Backward Elimination',
          'Stepwise Selection',
          'Forward Selection',
          'Coefficient Significance Assessment'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'The Backward Elimination variable selection process begins by:',
        options: [
          'Including only the intercept term in the model',
          'Including all potential predictor variables in the model',
          'Adding the single best predictor variable',
          'Removing variables based on their correlation with the dependent variable'
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'How can linear regression be used to compare the means of a continuous outcome variable between two groups?',
        options: [
          'By using polynomial terms for group membership',
          'By applying a logarithmic transformation to the group variable',
          'By using a binary dummy variable (0/1) representing group membership',
          'It cannot be used; a t-test is always required'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'What does an "interaction effect" signify in a regression model?',
        options: [
          'That two predictor variables are highly correlated',
          'That the model is overfitting the training data',
          'That the effect of one predictor variable on the outcome depends on the level of another predictor',
          'That the residuals of the model are not normally distributed'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'What is a primary reason for applying non-linear transformations (like logarithm or square root) to variables in regression?',
        options: [
          'To increase the number of predictors in the model',
          'To make the model interpretation simpler',
          'To address non-linearity in relationships or non-normality/heteroscedasticity in residuals',
          'To convert a continuous dependent variable into a binary one'
        ],
        correctAnswer: 3
      }

    ]
},
'3-2':{
    title: 'Predictive Analysis Assessment',
    description: 'Demonstrate your ability to build and evaluate predictive models using real business data.',
    questions: [
      {
        id: 1,
        question: 'According to the notes, what is the primary goal of Predictive Analysis?',
        options: [
          'To describe past events using historical data',
          'To use historical data and algorithms to forecast future trends and outcomes',
          'To understand the root cause of why something happened in the past',
          'To visualize data patterns without making future predictions'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'What key factors critically determine the choice of analytical method in predictive analysis, as mentioned in the core concepts?',
        options: [
          'The software used and the size of the dataset',
          'The visualization technique preferred and the reporting format',
          'The data type (continuous/categorical) and presence of time-dependent structures',
          'The experience level of the analyst and the project budget'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'Which term is defined as patterns or fluctuations in time series data that repeat over a fixed period, such as daily, weekly, or yearly?',
        options: [
          'Trend',
          'Autocorrelation',
          'Seasonality',
          'Cross-validation'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'For forecasting continuous data like sales figures or temperature, which technique is commonly used?',
        options: [
          'Logistic Regression',
          'Linear Regression',
          'Naive Method',
          'Confusion Matrix Analysis'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Which set of evaluation metrics is specifically used for assessing the performance of categorical data forecasting models like logistic regression?',
        options: [
          'MAE, MSE, RMSE',
          'R-squared, Adjusted R-squared',
          'Accuracy, Precision, Recall, F1 Score',
          'Autocorrelation Function (ACF), Partial Autocorrelation Function (PACF)'
        ],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'Which simple time series forecasting method sets the forecast for the next period equal to the last observed value?',
        options: [
          'Average Method',
          'Seasonal Naive Method',
          'Drift Method',
          'Naive Method'
        ],
        correctAnswer: 4
      },
      {
        id: 7,
        question: 'What does an Autoregressive (AR) model primarily use to predict future values of a time series?',
        options: [
          'External predictor variables unrelated to the series',
          'Only the long-term trend component',
          'A linear combination of past values of the time series itself',
          'Only the seasonal component of the series'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'What does Autocorrelation measure in a time series?',
        options: [
          'The correlation between two different time series',
          'The overall upward or downward direction of the series',
          'The correlation of the time series with lagged versions of itself',
          'The strength of repeating patterns over fixed periods'
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: 'Why is standard k-fold cross-validation generally inappropriate for time series data?',
        options: [
          'It requires too much computation time for time series.',
          'It cannot handle categorical outcomes common in time series.',
          'It ignores the temporal order, potentially training on future data to predict the past.',
          'It only works for linear regression models.'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'In the context of evaluating linear regression for continuous data forecasting, what does R-squared represent?',
        options: [
          'The average absolute difference between predicted and actual values',
          'The average squared difference between predicted and actual values',
          'The proportion of variance in the dependent variable predictable from the independent variables',
          'The square root of the mean squared error'
        ],
        correctAnswer: 3
      }

    ]
},
'4-2':{
    title: 'Quality Management Statistics Test',
    description: 'Apply statistical quality control methods to analyze and improve business processes.',
    questions: [
      {
        id: 1,
        question: 'What is the primary role of statistical methods within quality management?',
        options: [
          'To document organizational procedures and responsibilities',
          'To provide data-driven tools for monitoring, analysis, control, and improvement',
          'To eliminate the need for customer feedback mechanisms',
          'To solely focus on marketing and sales strategies'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'Which statistical methodology uses control charts to monitor process stability by distinguishing between common and special cause variation?',
        options: [
          'Regression Analysis',
          'Hypothesis Testing',
          'Design of Experiments (DOE)',
          'Statistical Process Control (SPC)'
        ],
        correctAnswer: 4
      },
      {
        id: 3,
        question: 'In hypothesis testing related to quality control, what does a Type I Error represent?',
        options: [
          'Correctly accepting a batch that meets standards',
          'Incorrectly failing to reject a false hypothesis (e.g., accepting a defective batch)',
          'Incorrectly rejecting a true hypothesis (e.g., rejecting a good batch)',
          'Correctly rejecting a batch that fails standards'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Which statistical technique is best suited for estimating and quantifying the relationship between input factors (like temperature, pressure) and a process output (like material hardness)?',
        options: [
          'Decision Trees',
          'Regression Analysis',
          'P Charts',
          'Hypothesis Testing'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What is the primary purpose of using control charts in Statistical Process Control (SPC)?',
        options: [
          'To determine the root cause of all defects immediately',
          'To graphically monitor process performance over time against statistical limits',
          'To design experiments for process optimization',
          'To predict the exact number of defects in the next batch'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'According to the notes, variation present in a process when it is stable and only influenced by inherent, natural variability is called:',
        options: [
          'Special Cause Variation',
          'Assignable Cause Variation',
          'Common Cause Variation',
          'Predictable Error Variation'
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        question: 'Which tool provides a flowchart-like structure for making sequential decisions (e.g., accept, reject, re-inspect) based on observed data like defect rates?',
        options: [
          'Regression Model',
          'X-bar Chart',
          'Decision Tree',
          'Design of Experiments Plan'
        ],
        correctAnswer: 3
      },
      {
        id: 8,
        question: 'What is the primary goal of using Design of Experiments (DOE) in quality management?',
        options: [
          'To monitor the proportion of defective items continuously',
          'To systematically determine which factors significantly impact process outcomes and find optimal settings',
          'To test specific hypotheses about population means',
          'To create visual maps for decision making based on simple thresholds'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'Which type of control chart would be most appropriate for monitoring the number of non-conforming units found in constant-size samples?',
        options: [
          'X-bar Chart',
          'R Chart',
          'P Chart',
          'NP Chart'
        ],
        correctAnswer: 4
      },
      {
        id: 10,
        question: 'When the dependent variable in a regression analysis is categorical (e.g., pass/fail), which specific type of regression is mentioned as suitable?',
        options: [
          'Linear Regression',
          'Polynomial Regression',
          'Logistic Regression',
          'Stepwise Regression'
        ],
        correctAnswer: 3
      }

    ]
},


};

export function getTest(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return asbTests[key as keyof typeof asbTests];
}