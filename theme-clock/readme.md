---

# 📌 UNIT–I

---

## **UNIT–I | QUESTION–1**

### Architectures of Distributed Systems

**Client–Server Architecture**

* A central server provides services to multiple clients.
* Clients send requests and server sends responses.

```
Client → Server ← Client
```

**Peer-to-Peer Architecture**

* All nodes are equal.
* Each node can act as both client and server.

```
P ─ P
│ X │
P ─ P
```

**Multi-Tier Architecture**

* System is divided into layers.
* Each layer performs a specific function.

```
User Interface → Application Logic → Database
```

**Service Oriented Architecture**

* System consists of independent services.
* Services are loosely coupled and reusable.

**Centralized Architecture**

* One central system controls all operations.

**Decentralized Architecture**

* Control is shared among multiple systems.

**Hybrid Architecture**

* Combination of centralized and decentralized models.

---

## **UNIT–I | QUESTION–2**

### Issues and Limitations of Distributed Systems

**Heterogeneity**

* Different hardware and software systems are used.

**Transparency**

* System hides distribution details from users.

**Scalability**

* System should support growth in users and resources.

**Fault Tolerance**

* System continues to work even if failures occur.

**Security**

* Protection of data and resources.

**No Global Clock**

* No common time reference exists.

**Partial Failures**

* Some systems may fail while others continue.

---

## **UNIT–I | QUESTION–3**

### Communication Networks and Primitives

**Local Area Network**

* Used for short-distance communication.

**Wide Area Network**

* Used for long-distance communication.

**Network Topologies**

* Bus, Star, and Ring define node connections.

**Message Passing**

* Processes communicate using send and receive operations.

**Remote Procedure Call**

* A process calls a procedure on a remote system.

**Stream Communication**

* Continuous flow of data between processes.

**Group Communication**

* One-to-many communication.

---

## **UNIT–I | QUESTION–4**

### Logical Clocks and Causal Ordering

**Lamport Logical Clock**

* Assigns logical timestamps to events.
* Helps in ordering events.

**Happens-Before Relation**

* Defines cause and effect between events.

**Vector Clock**

* Detects causality and concurrent events.

**Causal Ordering**

* Messages are delivered in correct order.

```
Process 1 → Message → Process 2
```

---

## **UNIT–I | QUESTION–5**

### Global State and Termination Detection

**Global State**

* Combination of all local states and messages.

**Consistent Cut**

* Represents a valid global state.

**Inconsistent Cut**

* Represents an invalid global state.

**Termination Detection**

* All processes are passive and no messages are in transit.

---

# 📌 UNIT–II

---

## **UNIT–II | QUESTION–1**

### Distributed Mutual Exclusion

**Critical Section**

* Part of program accessing shared resources.

**Mutual Exclusion**

* Only one process enters critical section.

**Progress**

* Requests are eventually granted.

**Fairness**

* No process starves.

**Non-Token Based Algorithms**

* Permission-based access.

**Token-Based Algorithms**

* Token grants access.

---

## **UNIT–II | QUESTION–2**

### Lamport’s Mutual Exclusion Algorithm

**Logical Clocks**

* Used to order requests.

**Request Message**

* Process requests entry.

**Reply Message**

* Permission is granted.

**Release Message**

* Process exits critical section.

**Rule**

* Process enters when it is first in queue.

```
Request → Reply → Critical Section → Release
```

---

## **UNIT–II | QUESTION–3**

### Ricart–Agrawala Algorithm

**Concept**

* Improved version of Lamport’s algorithm.

**Messages Used**

* Request and Reply only.

**Deferred Reply**

* Reply delayed based on timestamp.

```
Request ↔ Reply
```

---

## **UNIT–II | QUESTION–4**

### Maekawa’s Algorithm

**Quorum**

* Subset of processes grants permission.

**Intersection Property**

* Any two quorums share one process.

**Messages Used**

* Request, Grant, Fail, Inquire, Yield.

```
Q1 ∩ Q2 ≠ Ø
```

**Limitation**

* Deadlock may occur.

---

## **UNIT–II | QUESTION–5**

### Token-Based Mutual Exclusion Algorithms

**Single Token**

* Only token holder enters critical section.

**Suzuki–Kasami Algorithm**

* Uses broadcast requests.

**Singhal’s Algorithm**

* Reduces number of messages.

**Raymond’s Algorithm**

* Uses tree structure.

```
Token → Process
```

---

# 📌 UNIT–III

---

## **UNIT–III | QUESTION–1**

### Distributed Deadlock Detection Basics

**Mutual Exclusion**

* Resource cannot be shared.

**Hold and Wait**

* Process holds one resource and waits.

**No Preemption**

* Resources cannot be forcibly taken.

**Circular Wait**

* Processes form a cycle.

**Handling Strategies**

* Prevention, Avoidance, Detection.

---

## **UNIT–III | QUESTION–2**

### Issues in Deadlock Detection and Resolution

**No Global State**

* Only partial system view exists.

**Message Delay**

* Information becomes outdated.

**Phantom Deadlock**

* False deadlock detection.

**Recovery Methods**

* Process termination or rollback.

---

## **UNIT–III | QUESTION–3**

### Control Organizations for Deadlock Detection

**Centralized Approach**

* One coordinator detects deadlock.

**Distributed Approach**

* No central controller.

**Hierarchical Approach**

* Cluster-based detection.

---

## **UNIT–III | QUESTION–4**

### Centralized Deadlock Detection Algorithm

**Global Wait-For Graph**

* Represents resource dependencies.

**Cycle Detection**

* Cycle indicates deadlock.

```
P1 → P2 → P1
```

---

## **UNIT–III | QUESTION–5**

### Distributed and Hierarchical Deadlock Detection

**Distributed Detection**

* Processes exchange probe messages.

```
P1 → P2 → P3
↑           |
└───────────┘
```

**Limitation**

* High message overhead.

**Hierarchical Detection**

* Local detection followed by global detection.

```
Global Controller
   /        \
Local C1  Local C2
```

---

# 📌 UNIT–IV

---

## **UNIT–IV | QUESTION–1**

### Multiprocessor Systems

**Performance**

* Multiple processors work in parallel.

**Reliability**

* System continues after failure.

**Architectures**

* Shared memory, Bus-based, Crossbar, Non-uniform memory access.

---

## **UNIT–IV | QUESTION–2**

### Multiprocessor Operating System Structures

**Master–Slave Structure**

* One processor controls others.

**Symmetric Multiprocessing**

* All processors are equal.

**Asymmetric Multiprocessing**

* Fixed processor roles.

---

## **UNIT–IV | QUESTION–3**

### Threads and Synchronization

**Threads**

* Lightweight execution units.

**Mutex**

* Ensures mutual exclusion.

**Semaphore**

* Controls resource count.

**Spinlock**

* Busy waiting lock.

**Barrier**

* Synchronization point.

---

## **UNIT–IV | QUESTION–4**

### Processor Scheduling

**Load Balancing**

* Equal distribution of work.

**Processor Affinity**

* Improves cache usage.

**Scheduling Methods**

* Global queue and per-processor queue.

---

## **UNIT–IV | QUESTION–5**

### Distributed File Systems

**Client–Server Model**

* Files accessed remotely.

**Caching**

* Improves performance.

**Consistency**

* Same data view for users.

**Fault Tolerance**

* System recovery after failure.

---

# 📌 UNIT–V

---

## **UNIT–V | QUESTION–1**

### Load Distributing Issues

**Load Measurement**

* Determines system workload.

**Migration Cost**

* Overhead of moving tasks.

**Stability**

* Avoids frequent migrations.

---

## **UNIT–V | QUESTION–2**

### Load Distributed Algorithm Components

**Measurement Policy**

* Collects load information.

**Transfer Policy**

* Decides when to migrate.

**Selection Policy**

* Chooses task to move.

**Location Policy**

* Selects destination system.

---

## **UNIT–V | QUESTION–3**

### Load Distributing Algorithms

**Static Algorithms**

* Decisions made at compile time.

**Dynamic Algorithms**

* Decisions made at runtime.

**Sender-Initiated**

* Overloaded node sends tasks.

**Receiver-Initiated**

* Idle node requests tasks.

---

## **UNIT–V | QUESTION–4**

### Task Migration

**Preemptive Migration**

* Task moved during execution.

**Non-Preemptive Migration**

* Task moved after completion.

**Issues**

* State transfer and security.

---

## **UNIT–V | QUESTION–5**

### Distributed Shared Memory

**Concept**

* Shared memory abstraction on distributed systems.

**Write Invalidate Protocol**

* Invalidates other copies.

**Write Update Protocol**

* Updates all copies.

**Issues**

* Consistency and performance.

---

