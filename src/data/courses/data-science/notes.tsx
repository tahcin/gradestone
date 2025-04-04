// Notes data for the Data Science course
export const dataScienceNotes = {
  // Module 1, Lesson 1
  '1-1': {
    title: 'Python Fundamentals',
    content: `
# Python for Data Science

## Introduction to Python
Python is a high-level, interpreted programming language that has become essential for data science due to its simplicity, readability, and powerful libraries.

![Python code on a computer screen](https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?auto=format&fit=crop&q=80&w=1000)

### Why Python for Data Science?
- **Readability**: Clean syntax makes code easy to understand
- **Rich Ecosystem**: Extensive libraries for data manipulation and analysis
- **Community Support**: Large community providing resources and tools
- **Versatility**: Useful for data cleaning, analysis, visualization, and machine learning

## Python Basics

### Variables and Data Types
\`\`\`python
# Numbers
x = 10        # integer
y = 3.14      # float

# Strings
name = "Data Science"
multiline = """Multiple
line string"""

# Boolean
is_data_scientist = True

# Lists - ordered, changeable, allows duplicates
fruits = ["apple", "banana", "cherry"]

# Tuple - ordered, unchangeable
coordinates = (10.0, 20.0)

# Dictionary - key-value pairs
person = {
    "name": "John",
    "age": 30,
    "profession": "Data Scientist"
}

# Set - unordered, no duplicates
unique_numbers = {1, 2, 3, 4, 5}
\`\`\`

![Data types visualization](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000)

### Control Flow
\`\`\`python
# Conditional statements
age = 25
if age < 18:
    print("Minor")
elif age < 65:
    print("Adult")
else:
    print("Senior")

# Loops
# For loop
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

### Functions
\`\`\`python
# Function definition
def calculate_mean(numbers):
    return sum(numbers) / len(numbers)

# Function call
data = [10, 15, 20, 25, 30]
mean_value = calculate_mean(data)
print(f"Mean: {mean_value}")  # Output: Mean: 20.0
\`\`\`

![Data scientist analyzing data](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000)

## Essential Python Libraries for Data Science

### NumPy
NumPy is fundamental for scientific computing in Python, providing support for arrays, matrices, and mathematical functions.

\`\`\`python
import numpy as np

# Create an array
arr = np.array([1, 2, 3, 4, 5])
print(arr)  # Output: [1 2 3 4 5]

# Array operations
print(arr * 2)  # Output: [2 4 6 8 10]

# Statistical methods
print(np.mean(arr))  # Output: 3.0
print(np.std(arr))   # Output: 1.4142135623730951

# Create a matrix
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix)
\`\`\`

### Pandas
Pandas is built on NumPy and provides data structures and functions for data manipulation and analysis.

![Data visualization dashboard with charts](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000)

\`\`\`python
import pandas as pd

# Create a DataFrame
data = {
    'Name': ['John', 'Anna', 'Peter', 'Linda'],
    'Age': [28, 24, 35, 32],
    'City': ['New York', 'Paris', 'Berlin', 'London']
}
df = pd.DataFrame(data)
print(df)

# Data selection
print(df['Name'])           # Select a column
print(df[df['Age'] > 30])   # Filtering data

# Reading data from CSV
# df = pd.read_csv('data.csv')

# Basic statistics
print(df.describe())
\`\`\`

### Matplotlib
Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.

\`\`\`python
import matplotlib.pyplot as plt

# Simple line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.show()

# Bar chart
categories = ['A', 'B', 'C', 'D']
values = [15, 24, 8, 18]
plt.bar(categories, values)
plt.show()
\`\`\`

![Data visualization with colorful charts](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000)

## Project Setup and Workflow

### Virtual Environments
\`\`\`bash
# Create a virtual environment
python -m venv myenv

# Activate virtual environment
# On Windows
myenv\\Scripts\\activate
# On macOS/Linux
source myenv/bin/activate

# Install packages
pip install numpy pandas matplotlib
\`\`\`

### Jupyter Notebooks
Jupyter notebooks provide an interactive environment for developing and presenting data science projects.

\`\`\`bash
# Install Jupyter
pip install jupyter

# Launch Jupyter Notebook
jupyter notebook
\`\`\`

![Jupyter notebook interface](https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=1000)

## Best Practices for Data Science with Python

1. **Use vectorized operations** when possible (avoid loops)
2. **Keep data manipulation and visualization separate** for better code organization
3. **Document your code** with comments and docstrings
4. **Use version control** (Git) for your projects
5. **Structure your projects** consistently
\`\`\`
project/
  ├── data/            # Raw and processed data
  ├── notebooks/       # Jupyter notebooks
  ├── src/             # Source code
  ├── tests/           # Test files
  ├── README.md        # Project documentation
  └── requirements.txt # Dependencies
\`\`\`
`,
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-purple-500',
    darkGradientFrom: 'dark:from-blue-500',
    darkGradientTo: 'dark:to-purple-600',
    iconColor: 'text-blue-500'
  },
  
  // Module 2, Lesson 1
  '2-1': {
    title: 'Data Analysis with Pandas',
    content: `
# Data Analysis with Pandas

Pandas is the most popular Python library for data analysis. It provides high-performance, easy-to-use data structures and data analysis tools.

## Pandas DataFrames

The primary Pandas data structure is the DataFrame, which you can think of as a spreadsheet or SQL table:

\`\`\`python
import pandas as pd

# Creating a DataFrame from a dictionary
data = {
    'Name': ['John', 'Anna', 'Peter', 'Linda'],
    'Age': [28, 24, 35, 32],
    'City': ['New York', 'Paris', 'Berlin', 'London']
}

df = pd.DataFrame(data)
print(df)
\`\`\`

## Reading Data

Pandas can read data from various sources:

\`\`\`python
# CSV files
df = pd.read_csv('data.csv')

# Excel files
df = pd.read_excel('data.xlsx')

# SQL databases
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql('SELECT * FROM table', conn)
\`\`\`

## Data Exploration

Pandas provides several methods to explore your data:

\`\`\`python
# Basic information
df.info()
df.describe()

# View data
df.head()  # First 5 rows
df.tail()  # Last 5 rows

# Dimensions
df.shape  # (rows, columns)
\`\`\`

## Data Selection

Selecting specific data from a DataFrame:

\`\`\`python
# Select a column
df['Name']

# Select multiple columns
df[['Name', 'Age']]

# Select rows by index
df.iloc[0]  # First row
df.iloc[0:3]  # First three rows

# Select rows by condition
df[df['Age'] > 30]
\`\`\`

## Data Cleaning

Common data cleaning operations:

\`\`\`python
# Handle missing values
df.isna().sum()  # Count missing values
df.dropna()  # Drop rows with missing values
df.fillna(0)  # Fill missing values with 0

# Remove duplicates
df.drop_duplicates()

# Rename columns
df.rename(columns={'Name': 'Full_Name'})
\`\`\`

## Data Aggregation

Grouping and aggregating data:

\`\`\`python
# Group by a column and calculate statistics
df.groupby('City').mean()
df.groupby('City').agg({'Age': ['min', 'max', 'mean']})

# Pivot tables
pd.pivot_table(df, values='Age', index='City', aggfunc='mean')
\`\`\`

## Practice Exercise

Try these exercises with a real dataset:
1. Load the famous "Titanic" dataset using \`pd.read_csv('titanic.csv')\`
2. Explore the data structure and statistics
3. Find the survival rate by gender
4. Identify the age distribution of passengers
    `,
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-purple-500',
    darkGradientFrom: 'dark:from-blue-500',
    darkGradientTo: 'dark:to-purple-600',
    iconColor: 'text-blue-500'
  },

  // Template for adding new notes
  /*
  'module-lesson': {
    title: 'Note Title',
    content: `
# Main Heading

Content goes here...

## Subheading

More content...

\`\`\`python
# Code example
print("Hello World")
\`\`\`
    `,
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-purple-500',
    darkGradientFrom: 'dark:from-blue-500',
    darkGradientTo: 'dark:to-purple-600',
    iconColor: 'text-blue-500'
  },
  */
};

// Helper function to get a note by module ID and lesson ID
export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return dataScienceNotes[key as keyof typeof dataScienceNotes];
} 