```
UNIT I | Q1: WHAT IS MACHINE LEARNING?
Machine Learning enables computers to learn patterns from data without explicit programming. Systems improve performance through experience rather than hardcoded rules.

🔹 Definition (4 words)
Learning from data automatically

🔹 Core Concept
Data + Algorithm → Model → Predictions

🔹 Importance (4 words)
Automates complex decision making

🔹 Real Examples
• Healthcare: Disease prediction
• Finance: Fraud detection
• E-commerce: Recommendations

UNIT I | Q2: TYPES OF ML LEARNING
Four learning types based on data availability and feedback mechanism.

🔹 Supervised Learning (4 words)
Labeled data input-output pairs
→ Classification & Regression
→ Algorithms: Decision Trees, SVM

🔹 Unsupervised Learning (4 words)
Discovers hidden patterns unlabeled
→ Clustering & Dimensionality Reduction
→ Algorithms: K-Means, PCA

🔹 Semi-Supervised (4 words)
Small labeled + large unlabeled
→ Uses both data types

🔹 Reinforcement Learning (4 words)
Agent learns via rewards
→ Trial-and-error decision making
→ Algorithms: Q-Learning

UNIT I | Q4: SUPERVISED LEARNING
Learning mapping function from labeled input-output examples to predict unseen data.

🔹 How It Works (5 words)
Observe patterns → Generalize → Predict
Training Data → Model → Predictions

🔹 Types
• Classification: Discrete output (Spam/Not Spam)
• Regression: Continuous output (House price)

🔹 Algorithms
Logistic Regression, Decision Trees, SVM, KNN

UNIT I | Q5: REGRESSION VS CLASSIFICATION
Regression predicts continuous values; classification assigns discrete class labels.

| Aspect | Regression | Classification |
|--------|------------|----------------|
| Output | Continuous | Categorical |
| Example | ₹50,000 | Spam/Not Spam |
| Algorithm | Linear Regression | Logistic Regression |
| Evaluation | MSE, RMSE | Accuracy, F1-score |

UNIT I | Q7: LINEAR REGRESSION
Predicts continuous output using linear relationship between input features and target variable.

🔹 Model Equation
y = b₀ + b₁x₁ + b₂x₂ + ... + bₙxₙ

🔹 Assumptions (4 words)
Linearity, Independence, Homoscedasticity, Normality

🔹 Applications
• House price prediction
• Sales forecasting
• Temperature estimation

UNIT I | Q9: LOGISTIC REGRESSION
Classification algorithm predicting probability of binary outcome using sigmoid function.

🔹 Sigmoid Function
σ(z) = 1 / (1 + e⁻ᶻ)
→ Output: 0 to 1 probability

🔹 Decision Rule
Probability ≥ 0.5 → Class 1
Probability < 0.5 → Class 0

🔹 Applications
Spam detection, Disease diagnosis, Credit scoring

UNIT II | Q3: FEATURE SELECTION IMPORTANCE
Selecting relevant features improves model accuracy, reduces overfitting, and lowers computational cost.

🔹 Why Important (5 words)
Better accuracy, less complexity
• Removes noise & redundancy
• Handles curse of dimensionality
• Improves interpretability

🔹 Example: House Price
✓ Useful: Area, Location, Rooms
✗ Useless: Owner name, House color

UNIT II | Q4: FEATURE CONSTRUCTION & TRANSFORMATION
Creating new features or modifying existing ones to improve model performance.

| Type | Purpose | Example |
|------|---------|---------|
| Construction | Create informative features | BMI = weight/height² |
| Transformation | Scale/modify features | Normalization 0-1 range |

🔹 Importance (4 words)
Enhances data representation quality

UNIT II | Q5: BINARY CLASSIFICATION
Classification problem with exactly two possible output classes.

🔹 Output Labels
0/1, Yes/No, True/False

🔹 Examples
• Spam detection (Spam/Not Spam)
• Disease diagnosis (Yes/No)
• Fraud detection (Fraud/Genuine)

🔹 Algorithms
Logistic Regression, SVM, Decision Trees

UNIT II | Q6: EVALUATION METRICS
Metrics derived from confusion matrix to assess binary classifier performance.

🔹 Confusion Matrix
TP  FP
FN  TN

🔹 Key Formulas
Accuracy = (TP+TN)/(TP+TN+FP+FN)
Precision = TP/(TP+FP)
Recall = TP/(TP+FN)
F1 = 2×(Prec×Rec)/(Prec+Rec)

🔹 When to Use
• Precision: Minimize false positives
• Recall: Minimize false negatives

UNIT II | Q8: UNSUPERVISED LEARNING
Learning patterns from unlabeled data without predefined output classes.

🔹 Main Tasks (4 words)
Clustering and dimensionality reduction

🔹 Clustering Example
Customer segmentation → Groups by behavior

🔹 Dimensionality Reduction
PCA → Reduce features while preserving info

UNIT III | Q1: DECISION TREE REPRESENTATION
Tree-structured model using if-else rules for classification/regression decisions.

🔹 Components (4 words)
Nodes, branches, leaves structure
• Root: Top decision node
• Internal: Attribute tests
• Leaf: Final class label

🔹 Diagram
      [Outlook]
     /   |   \
 Sunny Overcast Rain
   |      |      |
[Humidity] Play [Wind]
  / \          /  \
High Normal  Weak Strong
  |    |      |     |
 No   Yes    Yes   No

UNIT III | Q2: DECISION TREE LEARNING ALGORITHM
Recursively splits data using best attribute until pure subsets achieved.

🔹 Steps (5 steps)
1. Start with full dataset
2. Select best attribute (max IG/Gini)
3. Split data by attribute values
4. Create child nodes
5. Repeat until stopping condition

🔹 Stopping Criteria
• All instances same class
• No attributes left
• Max depth reached

UNIT III | Q3: ID3 ALGORITHM
Decision tree algorithm using entropy and information gain for attribute selection.

🔹 Core Concepts (4 words)
Entropy measures impurity
Entropy(S) = -Σ pᵢ log₂(pᵢ)
IG(S,A) = Entropy(S) - Σ(|Sᵥ|/|S|)·Entropy(Sᵥ)

🔹 Steps
1. Calculate dataset entropy
2. Compute IG for all attributes
3. Select max IG attribute as node
4. Split data → create branches
5. Repeat recursively

🔹 Play Tennis Example
Outlook (max IG) → Root node

UNIT III | Q4: DECISION TREES VS LINEAR MODELS
Decision Trees use hierarchical rules; Linear Models assume linear relationships.

| Aspect | Decision Trees | Linear Models |
|--------|----------------|---------------|
| Structure | Tree/hierarchical | Mathematical equation |
| Relationship | Non-linear | Linear only |
| Scaling | Not required | Required |
| Interpretability | Very high | Moderate |
| Overfitting | High risk | Lower risk |

UNIT III | Q5: SUPPORT VECTOR MACHINES (SVM)
Finds optimal hyperplane maximizing margin between different classes.

🔹 Key Elements (4 words)
Hyperplane, margin, support vectors
• Hyperplane: Decision boundary
• Margin: Distance to nearest points
• Support Vectors: Critical boundary points

🔹 Diagram
Class +1    |    Class -1
  ● ●      |      ○ ○
    ●      |    ○
-----------|----------- ← Optimal Hyperplane
    ●      |        ○

🔹 Equation
w·x + b = 0

UNIT III | Q6: KERNEL METHODS
Enables non-linear classification by mapping data to higher dimensions.

🔹 Kernel Trick (4 words)
Implicit high-dimensional transformation
K(x₁,x₂) = φ(x₁)·φ(x₂) without computing φ

🔹 Common Kernels
• Linear: x₁·x₂
• Polynomial: (x₁·x₂ + c)ᵈ
• RBF: e^(-γ‖x₁-x₂‖²)

🔹 Purpose (4 words)
Solve non-linear problems efficiently

UNIT III | Q7: PERCEPTRON MODEL
Single-layer neural network for binary linear classification.

🔹 Structure
x₁─(w₁)─┐
x₂─(w₂)─┼─► Σ ──► f(z) ──► Output (0/1)
x₃─(w₃)─┘
   + b

🔹 Learning Rule
wᵢⁿᵉʷ = wᵢᵒˡᵈ + η(y - ŷ)xᵢ
bⁿᵉʷ = bᵒˡᵈ + η(y - ŷ)

🔹 Limitation (4 words)
Only linearly separable problems

UNIT III | Q8: DT & SVM ADVANTAGES/LIMITATIONS
Decision Trees: interpretable but unstable; SVMs: accurate but complex.

| Algorithm | Advantages | Limitations |
|-----------|------------|-------------|
| Decision Trees | • Easy interpretation<br>• Handles mixed data | • Overfitting risk<br>• Unstable to data changes |
| SVMs | • Effective high dimensions<br>• Robust to overfitting | • Computationally expensive<br>• Less interpretable |

UNIT IV | Q2: K-NEAREST NEIGHBOUR (KNN)
Classifies based on majority class of k nearest training points.

🔹 Steps (5 steps)
1. Choose k value
2. Calculate distances (Euclidean)
3. Find k nearest neighbors
4. Count class labels
5. Assign majority class

🔹 Distance Formula
d = √Σ(xᵢ - yᵢ)²

🔹 Diagram
● ●      ○
  ●  x  ○   ← New point
●        ○ ○
k=3 → Majority ● = Class A

UNIT IV | Q3: K-MEANS CLUSTERING
Partitions data into K clusters by minimizing intra-cluster distance.

🔹 Steps (5 steps)
1. Choose K clusters
2. Initialize K centroids randomly
3. Assign points to nearest centroid
4. Update centroids (mean of cluster)
5. Repeat until convergence

🔹 Objective Function
J = Σ Σ ‖x - μₖ‖² (minimize WCSS)

🔹 Limitation (4 words)
Sensitive to initial centroids

UNIT IV | Q4: K-MEDOIDS CLUSTERING
Uses actual data points (medoids) instead of centroids as cluster centers.

🔹 Key Difference (4 words)
Medoids = actual data points
• More robust to outliers
• Higher computational cost
• Works with any distance metric

🔹 Algorithm: PAM
1. Select K medoids
2. Assign points to nearest medoid
3. Swap medoids to minimize cost
4. Repeat until stable

UNIT IV | Q6: NAÏVE BAYES CLASSIFIER
Probabilistic classifier using Bayes' theorem with feature independence assumption.

🔹 Bayes' Theorem
P(C|X) = [P(X|C)·P(C)] / P(X)

🔹 Naïve Assumption
P(X|C) = P(x₁|C)·P(x₂|C)·...·P(xₙ|C)

🔹 Types
• Gaussian: Continuous data
• Multinomial: Text classification
• Bernoulli: Binary features

UNIT IV | Q7: EM ALGORITHM
Iterative method for parameter estimation with hidden/missing variables.

🔹 Two Steps (4 words)
Expectation then Maximization
E-Step: Estimate hidden variables
M-Step: Update parameters

🔹 Applications
• Gaussian Mixture Models
• Missing data imputation
• Hidden Markov Models

UNIT IV | Q8: GAUSSIAN MIXTURE MODELS (GMM)
Represents data as mixture of multiple Gaussian distributions.

🔹 Soft Clustering (4 words)
Probabilistic cluster membership
p(x) = Σ πₖ·N(x|μₖ,Σₖ)

🔹 vs K-Means
| K-Means | GMM |
|---------|-----|
| Hard clusters | Soft clusters |
| Spherical only | Elliptical shapes |
| Distance-based | Probability-based |

UNIT V | Q1: NEURAL NETWORK REPRESENTATION
Interconnected neurons organized in layers mimicking biological networks.

🔹 Structure (3 layers)
Input → Hidden → Output

🔹 Neuron Model
z = Σ wᵢxᵢ + b
y = f(z) [activation]

🔹 Diagram
x₁ ──●──┐
x₂ ──●──┼─► ● ──► ● ──► Output
x₃ ──●──┘     ●

UNIT V | Q3: SINGLE-LAYER VS MULTI-LAYER NN
Single-layer: no hidden layers; Multi-layer: ≥1 hidden layers.

| Aspect | Single-Layer | Multi-Layer |
|--------|--------------|-------------|
| Hidden Layers | None | One or more |
| Capability | Linear problems only | Non-linear problems |
| XOR Problem | Cannot solve | Can solve |
| Training | Simple rule | Backpropagation |

UNIT V | Q4: BACKPROPAGATION ALGORITHM
Trains multi-layer networks by propagating error backward to update weights.

🔹 Steps (5 steps)
1. Forward pass: Compute output
2. Calculate error (MSE)
3. Backward pass: Propagate error
4. Compute gradients (∂E/∂w)
5. Update weights: wₙₑ𝓌 = wₒₗ𝒹 - η·∂E/∂w

🔹 Weight Update
w ← w - η·(∂E/∂w)

UNIT V | Q6: REINFORCEMENT LEARNING FRAMEWORK
Agent learns optimal behavior through environment interaction and rewards.

🔹 Components (5 words)
Agent, environment, state, action, reward

🔹 Interaction Cycle
State → Action → Reward → New State

🔹 Diagram
   Action (A)
 ┌──────────────┐
 │              ▼
Agent        Environment
 ▲              │
 │              │
 └── Reward (R) │
   State (S) ───┘

UNIT V | Q8: RL VS SUPERVISED/UNSUPERVISED LEARNING
RL learns via rewards; Supervised uses labels; Unsupervised finds patterns.

| Aspect | Supervised | Unsupervised | Reinforcement |
|--------|------------|--------------|---------------|
| Data | Labeled | Unlabeled | No labels |
| Feedback | Direct output | None | Rewards |
| Learning | From examples | Pattern discovery | Trial & error |
| Decision | Single-step | Single-step | Sequential |

UNIT V | Q9: Q-LEARNING ALGORITHM
Model-free RL algorithm learning optimal action-value function.

🔹 Q-Table
Stores Q(s,a) values for state-action pairs

🔹 Update Equation
Q(s,a) ← Q(s,a) + α[r + γ·maxQ(s',a') - Q(s,a)]

🔹 Parameters
α = Learning rate (0-1)
γ = Discount factor (0-1)

🔹 Steps
1. Initialize Q-table
2. Observe state s
3. Choose action (ε-greedy)
4. Get reward r, next state s'
5. Update Q-value
6. Repeat until convergence
```
