**UNIT I | Q1: WHAT IS MACHINE LEARNING?**
Machine Learning enables computers to learn patterns from data without explicit programming. Systems improve performance through experience rather than hardcoded rules.

**🔹 Definition (4 words)**
Learning from data automatically

**🔹 Core Concept**
Data + Algorithm → Model → Predictions

**🔹 Importance (4 words)**
Automates complex decision making

**🔹 Real Examples**
* Healthcare: Disease prediction
* Finance: Fraud detection
* E-commerce: Recommendations

---

**UNIT I | Q2: TYPES OF ML LEARNING**
Four learning types based on data availability and feedback mechanism.



**🔹 Supervised Learning (4 words)**
Labeled data input-output pairs
→ Classification & Regression
→ Algorithms: Decision Trees, SVM

**🔹 Unsupervised Learning (4 words)**
Discovers hidden patterns unlabeled
→ Clustering & Dimensionality Reduction
→ Algorithms: K-Means, PCA

**🔹 Semi-Supervised (4 words)**
Small labeled + large unlabeled
→ Uses both data types

**🔹 Reinforcement Learning (4 words)**
Agent learns via rewards
→ Trial-and-error decision making
→ Algorithms: Q-Learning

---

**UNIT I | Q4: SUPERVISED LEARNING**
Learning mapping function from labeled input-output examples to predict unseen data.

**🔹 How It Works (5 words)**
Observe patterns → Generalize → Predict
Training Data → Model → Predictions

**🔹 Types**
* Classification: Discrete output (Spam/Not Spam)
* Regression: Continuous output (House price)

**🔹 Algorithms**
Logistic Regression, Decision Trees, SVM, KNN

---

**UNIT I | Q5: REGRESSION VS CLASSIFICATION**

| Aspect | Regression | Classification |
| :--- | :--- | :--- |
| **Output** | Continuous | Categorical |
| **Example** | ₹50,000 | Spam/Not Spam |
| **Algorithm** | Linear Regression | Logistic Regression |
| **Evaluation** | MSE, RMSE | Accuracy, F1-score |

---

**UNIT I | Q7: LINEAR REGRESSION**
Predicts continuous output using linear relationship between input features and target variable.

**🔹 Model Equation**
$$y = b_0 + b_1x_1 + b_2x_2 + ... + b_nx_n$$

**🔹 Assumptions (4 words)**
Linearity, Independence, Homoscedasticity, Normality

---

**UNIT I | Q9: LOGISTIC REGRESSION**
Classification algorithm predicting probability of binary outcome using sigmoid function.

**🔹 Sigmoid Function**
$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

**🔹 Decision Rule**
* Probability $\ge$ 0.5 → Class 1
* Probability < 0.5 → Class 0

---

**UNIT II | Q3: FEATURE SELECTION IMPORTANCE**
Selecting relevant features improves model accuracy, reduces overfitting, and lowers computational cost.

**🔹 Why Important (5 words)**
Better accuracy, less complexity
* Removes noise & redundancy
* Handles curse of dimensionality
* Improves interpretability

---

**UNIT II | Q6: EVALUATION METRICS**
Metrics derived from confusion matrix to assess binary classifier performance.

**🔹 Confusion Matrix**
| | Predicted Positive | Predicted Negative |
| :--- | :--- | :--- |
| **Actual Positive** | TP | FN |
| **Actual Negative** | FP | TN |

**🔹 Key Formulas**
* Accuracy = $(TP+TN)/(TP+TN+FP+FN)$
* Precision = $TP/(TP+FP)$
* Recall = $TP/(TP+FN)$
* F1 = $2 \times \frac{Precision \times Recall}{Precision + Recall}$

---

**UNIT III | Q1: DECISION TREE REPRESENTATION**
Tree-structured model using if-else rules for classification/regression decisions.



**🔹 Components (4 words)**
Nodes, branches, leaves structure
* Root: Top decision node
* Internal: Attribute tests
* Leaf: Final class label

---

**UNIT III | Q5: SUPPORT VECTOR MACHINES (SVM)**
Finds optimal hyperplane maximizing margin between different classes.



**🔹 Equation**
$$w \cdot x + b = 0$$

**🔹 Key Elements (4 words)**
Hyperplane, margin, support vectors

---

**UNIT IV | Q2: K-NEAREST NEIGHBOUR (KNN)**
Classifies based on majority class of k nearest training points.

**🔹 Distance Formula (Euclidean)**
$$d = \sqrt{\sum (x_i - y_i)^2}$$

---

**UNIT IV | Q3: K-MEANS CLUSTERING**
Partitions data into K clusters by minimizing intra-cluster distance.



**🔹 Objective Function**
$$J = \sum_{j=1}^{k} \sum_{i=1}^{n} \|x_i^{(j)} - \mu_j\|^2$$

---

**UNIT V | Q4: BACKPROPAGATION ALGORITHM**
Trains multi-layer networks by propagating error backward to update weights.

**🔹 Weight Update**
$$w_{new} = w_{old} - \eta \cdot \frac{\partial E}{\partial w}$$

**🔹 Steps**
1. Forward pass: Compute output
2. Calculate error (MSE)
3. Backward pass: Propagate error
4. Compute gradients
5. Update weights

---

**UNIT V | Q6: REINFORCEMENT LEARNING FRAMEWORK**
Agent learns optimal behavior through environment interaction and rewards.



**🔹 Interaction Cycle**
State → Action → Reward → New State

---

**UNIT V | Q9: Q-LEARNING ALGORITHM**
Model-free RL algorithm learning optimal action-value function.

**🔹 Update Equation**
$$Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma \max Q(s',a') - Q(s,a)]$$
