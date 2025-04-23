export const asbNotes: { [key: string]: { title: string; content: string } } = {

'1-1':{
    title: 'Non-Parametric Methods',
    content: `

# Core Concepts

*   Statistical tests are classified into parametric and non-parametric based on assumptions about the underlying population distribution.
*   Parametric tests assume data follows a specific distribution (e.g., normal) and estimate population parameters (mean, variance).
*   Non-parametric tests are distribution-free, making them robust alternatives when parametric assumptions are violated (e.g., non-normality, outliers, small samples).
*   Non-parametric methods often utilize data ranks rather than actual values.
*   The choice depends on data characteristics; parametric tests offer parameter estimates, while non-parametric tests provide reliability when assumptions fail.
*   Both test types aid in summarizing data, identifying relationships, and testing hypotheses.

# Definitions
*   **Parametric Tests:** Statistical methods assuming data originates from a specific probability distribution (e.g., normal) and involving the estimation of population parameters.
*   **Non-Parametric Tests:** Statistical methods that do not rely on assumptions about the population distribution; often called distribution-free tests.
*   **Population Parameters:** Numerical characteristics of a population (e.g., mean (μ), standard deviation (σ), proportion (p)).
*   **Ranks:** The relative position or order of data points when sorted.

# Chi-Square Test of Independence

## Definition
A non-parametric method used to determine if a statistically significant association exists between two categorical variables.

## Key Insights
*   Tests the null hypothesis (H0) that the two variables are independent against the alternative hypothesis (H1) that they are dependent.
*   Compares observed frequencies (from sample data in a contingency table) with expected frequencies (calculated assuming independence).
*   The test statistic quantifies the discrepancy between observed and expected counts.
*   Decision (reject/fail to reject H0) is based on comparing the test statistic to the chi-square distribution with (rows-1) * (columns-1) degrees of freedom.
*   Continuous variables must be discretized (grouped into categories) before applying this test.
*   Independence implies that the occurrence of one variable's category does not influence the probability of the other variable's category occurring.

## Examples
*   Examining if airline ticket class (economic, business, first) is associated with travel type (domestic, international).
*   Assessing if salary distributions differ significantly across various company departments.
*   Testing if employee satisfaction level is independent of categorized average monthly hours worked.

## Formula
*   **Chi-Square Statistic (χ²):**
    ∑ [(Oᵢⱼ - Eᵢⱼ)² / Eᵢⱼ]
    *   Oᵢⱼ = Observed frequency in cell (row i, column j)
    *   Eᵢⱼ = Expected frequency in cell (row i, column j)
*   **Expected Frequency (Eᵢⱼ):**
    (Row i Total * Column j Total) / Grand Total



# Goodness of Fit Test

## Definition
A statistical test to assess how well observed sample data fits a hypothesized theoretical probability distribution (e.g., uniform, Poisson, normal).

## Key Insights
*   Compares the observed frequency distribution from the sample against the expected frequency distribution derived from the hypothesized theoretical distribution (H0).
*   The alternative hypothesis (H1) states the data does not follow the specified distribution.
*   Requires grouping continuous data into intervals/categories to obtain observed frequencies for comparison.
*   Expected frequencies are calculated based on the probability of each category under the assumed distribution.
*   Uses a chi-square test statistic to measure the discrepancy between observed and expected frequencies.

## Examples
*   Testing if employee satisfaction scores are uniformly distributed between 0 and 1.
*   Determining if the number of projects assigned per employee follows a Poisson distribution.
*   Validating if historical sales data conforms to a specific distribution to inform forecasting models.

## Formula
*   **Chi-Square Statistic (χ²):**
    ∑ [(Observed Frequency - Expected Frequency)² / Expected Frequency]
    *(Summation is across all categories/intervals)*



# Wilcoxon Signed Rank Test

## Definition
A non-parametric test used for one-sample or paired two-sample scenarios to assess hypotheses about the median.
*   **One-Sample:** Tests if the sample median differs significantly from a specific hypothesized median value.
*   **Paired Two-Sample:** Tests if the median of the differences between paired observations is significantly different from zero.

## Key Insights
*   Does not assume data follows a normal distribution; suitable for non-normal data or small sample sizes.
*   Based on ranking the absolute values of the differences (observation vs. hypothesized median, or paired differences).
*   Uses the signs (+/-) of the original differences, applied to the ranks.
*   The test statistic (W) is typically the sum of positive ranks (W+) or negative ranks (W-).
*   If H0 (no difference in medians) is true, W+ and W- are expected to be similar.
*   For large samples (n > 30), the test statistic (W+) approximates a normal distribution, allowing the use of a Z-score.

## Steps for Calculation
1.  Compute differences: (Observation - Hypothesized Median) or (Observation Pair 1 - Observation Pair 2).
2.  Discard zero differences.
3.  Rank the absolute values of the non-zero differences, assigning average ranks for ties.
4.  Apply the original sign (+ or -) of the difference to its corresponding rank.
5.  Sum the ranks with positive signs (W+) and/or the ranks with negative signs (W-).

## Formula (Large Sample Approximation, n > 30)
*   **Mean of W+:** μ(W+) = n(n + 1) / 4
*   **Z-Score:** Z = (W+ - μ(W+)) / Standard Error(W+)
    *(Note: The specific formula for Standard Error(W+) depends on ties and is derived from the properties of ranks, but its detailed calculation was not provided in the source summary.)*



# Conclusion

Parametric and non-parametric tests offer distinct approaches to hypothesis testing, differentiated primarily by their assumptions regarding data distribution. While parametric tests estimate population parameters assuming specific distributions, non-parametric methods like the Chi-Square tests (for independence and goodness of fit) and the Wilcoxon Signed Rank test provide robust, distribution-free alternatives. These non-parametric techniques are particularly valuable for analyzing categorical data, assessing distributional fit, or comparing medians when parametric assumptions are untenable, offering flexible tools for data analysis in diverse real-world scenarios.


    `
},
'2-1':{
    title: 'Advanced Regression Methods',
    content: `
# Core Concepts

*   Advanced regression methods extend beyond simple linear regression to handle complex datasets characterized by non-linearity, large size, multicollinearity, or potential overfitting.
*   The primary objective is to build more reliable and accurate predictive models applicable across diverse fields like healthcare, business, and social sciences.
*   Variable selection is crucial for simplifying models while maintaining predictive power, enhancing interpretability, and improving computational efficiency.
*   Techniques involve understanding theoretical principles, applying methods to data, interpreting outputs accurately, and evaluating model assumptions for reliability.
*   Proficiency in statistical software is essential for implementing these methods in real-world scenarios.

# Definitions of Key Terms

*   **Advanced Regression Methods:** Statistical techniques used for modeling relationships when assumptions of simple linear regression are violated or data complexity requires more sophisticated approaches (e.g., non-linear patterns, binary outcomes).
*   **Multicollinearity:** A situation where two or more predictor variables in a regression model are highly correlated, making it difficult to distinguish their individual effects on the dependent variable.
*   **Overfitting:** A modeling error where a model learns the detail and noise in the training data to the extent that it negatively impacts the performance of the model on new data.
*   **Variable Selection:** The process of choosing a subset of relevant predictor variables to be used in building a statistical model.
*   **Non-linear Regression:** A form of regression analysis where the observational data are modeled by a function which is a nonlinear combination of the model parameters and depends on one or more independent variables. Often involves transforming variables (e.g., using logarithms) or using inherently non-linear models.
*   **Dummy Variables:** Numerical variables (typically 0 or 1) used in regression analysis to represent subgroups of the sample (e.g., categorical variables like gender or treatment group).
*   **Log Odds:** The logarithm of the odds ratio ($ln(p/(1-p))$), where p is the probability of an event occurring. Used as the dependent variable in logistic regression.
*   **Interaction Effects:** Occur when the effect of one predictor variable on the dependent variable differs depending on the level of another predictor variable.
*   **Cross-validation:** A resampling procedure used to evaluate machine learning models on a limited data sample, assessing how the results of a statistical analysis will generalize to an independent dataset.

# Advanced Regression Techniques

## Polynomial Regression
*   **Definition:** Extends linear regression by adding polynomial terms (squared, cubed, etc.) of the independent variables to model non-linear, curved relationships.
*   **Key Insights:** Allows fitting curves to data rather than just straight lines. The degree of the polynomial determines the complexity of the curve.
*   **Formula:** $y = \\beta_0 + \\beta_1 x + \\beta_2 x^2 + ... + \\beta_k x^k + \\epsilon$
*   **Examples:** Including $x^2$ for a quadratic relationship or $x^3$ for a cubic relationship.

## Logistic Regression
*   **Definition:** Used when the dependent variable is binary (e.g., 0/1, yes/no, success/failure). It models the probability of the outcome occurring.
*   **Key Insights:** Models the log odds of the outcome as a linear combination of predictors. Parameter estimation often uses maximum likelihood. Coefficients represent the change in log odds for a one-unit change in the predictor. Can incorporate categorical predictors using dummy variables.
*   **Formula:** $ln(\\frac{p}{1-p}) = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_k x_k$ (where p is the probability of the outcome).
*   **Examples:** Predicting customer churn (yes/no), loan default (yes/no), disease presence (yes/no). Using Excel Solver to maximize log likelihood.

## Ridge and Lasso Regression
*   **Definition:** Regularization techniques used to handle multicollinearity and prevent overfitting, especially useful when dealing with a large number of predictors.
*   **Key Insights:** They add a penalty term to the loss function to shrink coefficient estimates towards zero (Lasso can shrink them exactly to zero, performing variable selection).

## Support Vector Regression (SVR)
*   **Definition:** An extension of Support Vector Machines used for regression problems.
*   **Key Insights:** Effective for both linear and non-linear regression tasks, particularly strong with high-dimensional data.

## Decision Trees
*   **Definition:** Non-parametric supervised learning methods that can be used for both classification and regression.
*   **Key Insights:** Partition the feature space into a set of rectangles and fit a simple model (like a constant) in each one.



# Variable Selection

## Purpose
*   **Definition:** The process of identifying the most influential predictor variables from a larger set for use in a regression model.
*   **Key Insights:** Aims for model parsimony (simplicity) without sacrificing predictive or explanatory power. Improves interpretability and computational speed.

## Forward Selection
*   **Definition:** An iterative variable selection procedure that starts with no predictors and adds the most statistically significant variable at each step.
*   **Key Insights:** Variables are added one by one based on a chosen criterion (e.g., improvement in R-squared, reduction in RSS). Stops when adding variables offers no significant improvement.

## Backward Elimination
*   **Definition:** An iterative procedure that starts with all candidate predictors in the model and removes the least statistically significant variable at each step.
*   **Key Insights:** Variables are removed one by one based on a chosen criterion (e.g., highest p-value above a threshold, change in R-squared, ANOVA). Stops when all remaining variables are statistically significant.

## Stepwise Selection
*   **Definition:** A hybrid approach that combines forward selection and backward elimination.
*   **Key Insights:** At each step, considers adding a significant variable or removing an insignificant one. Can potentially overcome some limitations of pure forward or backward methods.

## Coefficient Significance Assessment
*   **Definition:** A simpler approach where a single model with all potential predictors is fitted.
*   **Key Insights:** Examines the p-values of the coefficients. Predictors with non-significant p-values (typically > 0.05 or another chosen alpha level) are considered less important and may be excluded. Interpretation relies on the remaining significant variables.



# Applications and Advanced Considerations

## Business Decision Making
*   **Key Insights:** Regression models are vital for identifying variable relationships, predicting future outcomes (e.g., sales, demand), optimizing strategies, and understanding complex phenomena.
*   **Examples:** Analyzing customer behavior, predicting employee retention, optimizing pricing strategies, assessing financial risk (e.g., probability of default).

## Comparing Means using Linear Regression
*   **Definition:** Using linear regression with a binary dummy variable (0/1) representing group membership to test for significant differences in the mean of a continuous outcome variable between two groups.
*   **Key Insights:** The coefficient ($\\beta_1$) of the dummy variable directly represents the estimated difference in means between the groups. Offers flexibility over traditional t-tests by allowing the inclusion of covariates to control for confounding factors. Related to the concept of fixed effects.
*   **Formula:** $Y = \\beta_0 + \\beta_1 D + \\epsilon$, where D is the binary group indicator (0 or 1). $\\beta_1$ estimates $Mean(Y|D=1) - Mean(Y|D=0)$.
*   **Comparison:** More flexible than standard t-tests or Wilcoxon tests as it easily accommodates additional control variables.

## Interaction Effects
*   **Definition:** Assessing whether the relationship between one predictor and the outcome depends on the level of another predictor.
*   **Key Insights:** Allows for more nuanced understanding of relationships (e.g., does the effect of resale status on house price differ depending on who posted the listing?).

## Non-Linear Transformations
*   **Definition:** Applying mathematical functions (e.g., logarithm, square root) to the dependent or independent variables.
*   **Key Insights:** Used to address non-linearity in relationships or non-normality/heteroscedasticity in residuals. Aids in satisfying model assumptions. Interpretation of coefficients changes based on the transformation applied.
*   **Examples:** Using log(price) or log(price per square foot) as the dependent variable when the price distribution is skewed. Using log(area) as a predictor.

## Model Evaluation
*   **Key Insights:** Assessing model fit and reliability involves checking assumptions (e.g., linearity, independence, normality, equal variance of errors) and using evaluation metrics. Techniques like cross-validation help assess how well the model generalizes to new data.
*   **Examples:** Checking normality of price distribution using histograms (Bangalore case study). Comparing different models (e.g., with/without transformations or interactions) using cross-validation.



# Conclusion

Advanced regression methods provide a powerful toolkit for analyzing complex data structures beyond the scope of simple linear models. Techniques like polynomial and logistic regression address non-linear relationships and binary outcomes, while regularization methods manage multicollinearity and overfitting. Effective variable selection ensures model parsimony and interpretability. Understanding transformations, interaction effects, and robust model evaluation techniques like cross-validation are crucial for building reliable predictive models that drive informed decision-making in various practical applications.

    `
},
'3-1':{
    title: 'Predictive Analysis',
    content: `

# Core Concepts

*   Predictive analysis utilizes historical data, statistical algorithms, and machine learning to forecast future trends and outcomes, enabling data-driven decisions.
*   The choice of analytical method depends critically on the data type (continuous or categorical) and whether the data exhibits time-dependent structures like trends or seasonality.
*   Time series analysis specifically addresses data collected sequentially over time, focusing on patterns like trend and seasonality for effective forecasting.
*   Evaluating forecast accuracy using appropriate metrics and validation techniques (like time-series cross-validation) is essential for model selection and reliability.
*   Proficiency involves understanding theoretical principles, applying methods, interpreting results, evaluating assumptions, and using statistical software effectively.

# Definitions of Key Terms

*   **Predictive Analysis:** The use of data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes based on historical data.
*   **Time Series Data:** A sequence of data points collected or recorded at specific, regular time intervals, where the order of observations is significant.
*   **Trend:** The long-term direction or movement in a time series, indicating a general increase, decrease, or stagnation over time.
*   **Seasonality:** Patterns or fluctuations in time series data that repeat over a fixed period (e.g., daily, weekly, yearly).
*   **Autocorrelation:** The correlation of a time series with lagged versions of itself, measuring how observations are related to preceding observations.
*   **Cross-validation:** A technique for assessing how the results of a statistical analysis will generalize to an independent data set. For time series, this typically involves training on earlier data and testing on later data.

# Handling Data Types in Predictive Analysis

## Continuous Data Forecasting
*   **Definition:** Forecasting variables that can take any value within a given range.
*   **Key Insights:** Linear regression is a common technique, modeling the relationship between a continuous dependent variable and one or more predictors.
*   **Examples:** Forecasting sales figures, house prices, temperature.
*   **Formula (Linear Regression):** $Y = \\beta_0 + \\beta_1 X_1 + ... + \\beta_k X_k + \\epsilon$
*   **Evaluation Metrics:**
    *   **MAE (Mean Absolute Error):** Average absolute difference between predicted and actual values. Formula: $\\frac{1}{n}\\sum_{i=1}^{n}|Actual_i - Forecast_i|$
    *   **MSE (Mean Squared Error):** Average squared difference between predicted and actual values. Formula: $\\frac{1}{n}\\sum_{i=1}^{n}(Actual_i - Forecast_i)^2$
    *   **RMSE (Root Mean Squared Error):** Square root of MSE, providing error in original units. Formula: $\\sqrt{MSE}$
    *   **R-squared:** Proportion of variance in the dependent variable predictable from the independent variables.

## Categorical Data Forecasting
*   **Definition:** Forecasting variables that fall into a limited number of distinct categories.
*   **Key Insights:** Logistic regression is often used for binary outcomes (two categories), modeling the probability of an event occurring.
*   **Examples:** Predicting customer purchase (yes/no), loan default (yes/no), patient diagnosis (positive/negative).
*   **Formula (Logistic Regression - Log Odds):** $ln(\\frac{p}{1-p}) = \\beta_0 + \\beta_1 X_1 + ... + \\beta_k X_k$ (where p is the probability of the event).
*   **Evaluation Metrics:**
    *   **Confusion Matrix:** Table summarizing performance (True Positives - TP, True Negatives - TN, False Positives - FP, False Negatives - FN).
    *   **Accuracy:** Overall correct predictions. Formula: $\\frac{TP + TN}{TP + TN + FP + FN}$
    *   **Precision:** Proportion of positive predictions that were correct. Formula: $\\frac{TP}{TP + FP}$
    *   **Recall (Sensitivity):** Proportion of actual positives correctly identified. Formula: $\\frac{TP}{TP + FN}$
    *   **F1 Score:** Harmonic mean of Precision and Recall. Formula: $2 \\times \\frac{Precision \\times Recall}{Precision + Recall}$
    *   **AUC-ROC Curve:** Area Under the Curve plotting True Positive Rate vs. False Positive Rate, measuring discriminative ability.
    *   **Quadratic Score (Brier Score):** Measures accuracy of probabilistic predictions. Formula: $\\frac{1}{n}\\sum_{i=1}^{n}(Predicted Probability_i - Actual Outcome_i)^2$ (where Actual Outcome is 0 or 1).



# Time Series Forecasting Methods

## Characteristics of Time Series Data
*   **Definition:** Data points ordered chronologically at specific intervals.
*   **Key Insights:** The temporal order is crucial. Analysis often involves identifying and separating components like trend and seasonality from the raw data to build effective forecasting models.

## Simple Forecasting Methods
*   **Definition:** Basic techniques making simple assumptions about data patterns.
*   **Key Insights:** Serve as benchmarks and are useful for stable data or short-term forecasts. Vary in how they use past data (most recent, average, weighted average, trend).
*   **Examples:**
    *   *Naive Method:* Forecast = Last observed value.
    *   *Seasonal Naive Method:* Forecast = Value from the same period in the previous season.
    *   *Average Method:* Forecast = Average of all past observations.
    *   *Weighted Average Method:* Forecast = Weighted average, often giving more weight to recent data.
    *   *Drift Method:* Forecast = Last value + average change between observations.
    *   *Exponential Smoothing:* Forecast = Weighted average giving exponentially decreasing weights to older observations. Formula (Simple Exponential Smoothing): $F_{t+1} = \\alpha Y_t + (1-\\alpha)F_t$

## Regression-Based Methods
*   **Definition:** Applying regression models (Linear, Logistic) to forecast time series data.
*   **Key Insights:** Can incorporate predictor variables. Standard regression may not inherently account for time series properties like autocorrelation; adjustments or time-specific models might be needed.
*   **Examples:** Using time itself or lagged variables as predictors in linear regression; using logistic regression for binary time series outcomes.

## Autoregressive (AR) Models
*   **Definition:** Models that use a linear combination of past values of the time series itself to predict future values.
*   **Key Insights:** Directly models the autocorrelation structure. The 'order' (p) indicates how many lagged values are used. High autocorrelation at a specific lag suggests that lag might be important in an AR model (e.g., lag 1 for AR(1)).
*   **Formula (AR(p) Model Structure):** $Y_t = c + \\phi_1 Y_{t-1} + \\phi_2 Y_{t-2} + ... + \\phi_p Y_{t-p} + \\epsilon_t$ (where $Y_t$ is the value at time t, $Y_{t-k}$ are lagged values, $\\phi$ are coefficients, c is a constant, and $\\epsilon_t$ is error).



# Model Evaluation in Forecasting

## General Principles
*   **Definition:** The process of assessing the accuracy and reliability of forecasting models.
*   **Key Insights:** Essential for comparing the performance of different forecasting methods and selecting the most suitable one for a given task.

## Cross-Validation for Time Series
*   **Definition:** A specific validation approach for time-ordered data.
*   **Key Insights:** Standard k-fold cross-validation is usually inappropriate as it ignores the temporal order. Time series cross-validation typically involves using an initial part of the series for training and a subsequent part for testing, mimicking real-world forecasting where predictions are made for the future based on the past.
*   **Examples:** Training on data from Year 1-3, testing on Year 4. Using metrics like RMSE on the test set to compare model performance.



# Conclusion

Predictive analysis provides methodologies to forecast future outcomes by leveraging historical data patterns. The approach varies based on data characteristics, with distinct techniques for continuous (e.g., linear regression) and categorical (e.g., logistic regression) variables. Time series data requires specialized methods (e.g., simple methods, AR models) that account for temporal dependencies like trend, seasonality, and autocorrelation. Rigorous evaluation using appropriate metrics and time-sensitive cross-validation is paramount to ensure the chosen forecasting model is accurate and reliable for decision-making.



    `
},
'4-1':{
    title: 'Statistical Methods in Quality Management',
    content: `
# Core Concepts

*   Quality management ensures products, services, and processes consistently meet or exceed customer expectations.
*   Statistical methods provide essential data-driven tools for monitoring, analysis, process control, and improvement within quality management.
*   Effective interpretation of data using statistical techniques is crucial for identifying deviations and guiding corrective actions.
*   Statistical Process Control (SPC) is a core methodology employing statistical tools like control charts to monitor process stability and variability.
*   The application of these methods facilitates process control and underpins continuous improvement efforts in organizations.

# Key Term Definitions
*   **Quality Management:** A formalized system that documents processes, procedures, and responsibilities for achieving quality policies and objectives, focusing on consistency and customer satisfaction.
*   **Statistical Methods:** The application of statistical techniques (data collection, analysis, interpretation, presentation) to solve problems and make decisions, particularly in process monitoring and improvement.
*   **Process Control:** The use of statistical tools and procedures to monitor process performance, identify variations, and maintain the process within desired operating limits.
*   **Continuous Improvement (Kaizen):** An ongoing effort to improve products, services, or processes, often involving incremental changes based on data analysis.
*   **Statistical Process Control (SPC):** A specific quality control methodology using statistical methods (especially control charts) to monitor and control a process, aiming to ensure it operates efficiently and produces conforming products.


# Hypothesis Testing
## Definition
A statistical procedure used to evaluate claims or hypotheses about a population or process based on sample data. In quality management, it often tests whether a product or process meets specified standards.
## Key Insights
*   Helps make objective decisions about product/process quality (e.g., accept/reject batch).
*   Requires understanding and balancing the risks of:
    *   **Type I Error:** Incorrectly rejecting a true hypothesis (e.g., rejecting a good batch).
    *   **Type II Error:** Incorrectly failing to reject a false hypothesis (e.g., accepting a defective batch).
*   Both error types have potential financial and reputational consequences.
## Examples
*   A manufacturer testing if the mean tensile strength of a material meets the minimum required specification.
*   Verifying if a process change has significantly reduced the defect rate.



# Regression Analysis
## Definition
A set of statistical processes for estimating the relationships between a dependent variable (output/outcome) and one or more independent variables (inputs/factors).
## Key Insights
*   Identifies and quantifies how changes in input factors affect process outputs or product quality characteristics.
*   Enables prediction of future outcomes based on input variable values.
*   Facilitates process optimization by understanding key influential factors.
*   **Logistic Regression:** A specific type used when the dependent variable is categorical (e.g., pass/fail, defective/non-defective).
## Examples
*   Modeling how furnace temperature and curing time affect the hardness of a material.
*   Predicting the likelihood of a product passing inspection based on sensor readings during production.
## Formula (Conceptual)
*   Represents the relationship mathematically, often as an equation predicting the dependent variable based on coefficients multiplied by independent variables (e.g., \`Output ≈ β₀ + β₁ * Input₁ + β₂ * Input₂ + ...\`).



# Statistical Process Control (SPC) and Control Charts
## Definition
A method of quality control which employs statistical methods to monitor and control a process, ensuring it operates at its full potential to produce conforming product. Control charts are the primary tool.
## Key Insights
*   **Control Charts:** Graphical displays of process data over time plotted against statistically derived limits.
*   Key components: **Central Line (CL)** (process average), **Upper Control Limit (UCL)**, and **Lower Control Limit (LCL)** (bounds for expected variation).
*   Distinguishes between:
    *   **Common Cause Variation:** Natural, inherent process variability (system is stable).
    *   **Special Cause Variation:** Unexpected variability due to specific identifiable causes (system is unstable, requires action). Points outside limits or non-random patterns signal special causes.
## Examples
*   **X-bar and R Charts:** Monitor the average (X-bar) and range (R) of a continuous variable (e.g., part dimension, fill volume).
*   **P Chart:** Monitors the proportion of defective items in samples of varying sizes (e.g., percentage of non-conforming units per batch).
*   **NP Chart:** Monitors the number of defective items when the sample size is constant (e.g., count of errors per inspected form).
## Comparisons
*   Different chart types are selected based on the type of data being monitored (continuous/variable vs. discrete/attribute) and the sampling strategy.
## Formula (Conceptual)
*   Control limits (UCL/LCL) are typically calculated based on the process average and its variability (e.g., \`CL ± 3 * Standard Deviations\`).



# Decision Trees for Quality Control
## Definition
A flowchart-like structure used as a predictive model or decision support tool, where each internal node represents a test on an attribute, each branch represents the outcome of the test, and each leaf node represents a decision or classification.
## Key Insights
*   Provides a structured, visual approach for making sequential decisions (e.g., approve, reject, re-inspect) based on observed data like defect rates.
*   Decision criteria (thresholds) are often established using historical data, statistical analysis (e.g., percentile approach), or cost-benefit analysis.
*   Can be used to automate classification decisions for new batches or items.
## Examples
*   A system deciding whether to accept a shipment based first on defect rate, then potentially on defect severity if the rate exceeds a primary threshold.



# Design of Experiments (DOE)
## Definition
A systematic methodology to structure inquiries and analyze the effect of varying multiple input factors (independent variables) simultaneously on an output (dependent variable).
## Key Insights
*   Identifies which factors significantly impact process outcomes and quantifies their effects, including interactions between factors.
*   Enables process optimization by finding the best combination of factor settings.
*   More efficient and informative than changing one factor at a time or using trial-and-error.
*   Leads to improved quality, reduced costs, and increased process understanding.
## Examples
*   Optimizing a chemical reaction yield by simultaneously varying temperature, pressure, and catalyst concentration according to a planned experimental design.
*   Improving the print quality of a machine by testing different settings for speed, ink flow, and substrate type.
## Comparisons
*   Superior to informal or "one-factor-at-a-time" (OFAT) experimentation, which can miss interactions and be less efficient.



# Conclusion

Statistical methods form an integrated framework for robust quality management. Hypothesis testing validates adherence to standards, while regression analysis elucidates factor-impact relationships for prediction and optimization. SPC, via control charts, provides continuous process monitoring for stability, decision trees offer structured classification rules, and DOE enables systematic process improvement by efficiently exploring factor effects. Together, these tools empower organizations with data-driven insights for enhancing consistency, efficiency, and overall product/service quality.




    `
},


};

export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return asbNotes[key as keyof typeof asbNotes];
}