
# 📌 UNIT–I

---

## **UNIT–I | QUESTION–1**

### Architectures of Distributed Systems

**Client–Server** – central service

```
Client → Server ← Client
```

**Peer-to-Peer** – equal nodes

```
P ─ P
│ X │
P ─ P
```

**Multi-Tier** – layered design

```
UI → Logic → Data
```

**Service Oriented Architecture** – loose services

**Centralized** – single control
**Decentralized** – autonomous nodes
**Hybrid** – mixed control

---

## **UNIT–I | QUESTION–2**

### Issues and Limitations

**Heterogeneity** – different systems
**Transparency** – hidden distribution
**Scalability** – growth support
**Fault tolerance** – failure handling
**Security** – data protection

**No global clock** – time issue
**Partial failures** – node crashes

---

## **UNIT–I | QUESTION–3**

### Communication Networks and Primitives

**Local Area Network** – short distance
**Wide Area Network** – long distance

**Bus / Star / Ring** – topologies

**Message Passing** – send/receive
**Remote Procedure Call** – remote call
**Stream Communication** – continuous data
**Group Communication** – multicast

---

## **UNIT–I | QUESTION–4**

### Logical Clocks and Causality

**Lamport Clock** – event ordering
**Happens-Before** – causal relation

**Vector Clock** – causality + concurrency

**Causal Ordering** – correct order

```
P1 → msg → P2
```

---

## **UNIT–I | QUESTION–5**

### Global State and Termination

**Global State** – local + messages

**Consistent Cut** – valid snapshot
**Inconsistent Cut** – invalid snapshot

**Termination** – passive + no messages

---

# 📌 UNIT–II

---

## **UNIT–II | QUESTION–1**

### Distributed Mutual Exclusion

**Critical Section** – shared resource

**Mutual exclusion** – one process
**Progress** – no deadlock
**Fairness** – no starvation

**Non-Token** – permission based
**Token-Based** – token ownership

---

## **UNIT–II | QUESTION–2**

### Lamport’s Mutual Exclusion Algorithm

**Logical clocks** – ordering

**Request** – ask permission
**Reply** – grant permission
**Release** – exit section

**Rule** – queue head + replies

```
REQ → REP → CS → REL
```

---

## **UNIT–II | QUESTION–3**

### Ricart–Agrawala Algorithm

**Optimized Lamport** – fewer messages

**Request / Reply** – only messages

**Deferred reply** – timestamp rule

```
REQ ↔ REP
```

---

## **UNIT–II | QUESTION–4**

### Maekawa’s Algorithm

**Quorum** – subset permission

**Intersection** – common member

**Request / Grant** – permission

**Fail / Inquire / Yield** – conflict handling

```
Q1 ∩ Q2 ≠ Ø
```

---

## **UNIT–II | QUESTION–5**

### Token-Based Mutual Exclusion

**Single Token** – access control

**Suzuki–Kasami** – broadcast request
**Singhal** – reduced broadcast
**Raymond** – tree-based

```
Token → Process
```

---

# 📌 UNIT–III

---

## **UNIT–III | QUESTION–1**

### Deadlock Basics

**Mutual exclusion** – non-shareable
**Hold and wait** – waiting resource
**No preemption** – force not allowed
**Circular wait** – cycle exists

**Prevention / Avoidance / Detection**

---

## **UNIT–III | QUESTION–2**

### Deadlock Detection Issues

**No global state** – partial view
**Message delay** – stale info
**Phantom deadlock** – false detection

**Recovery** – kill / rollback

---

## **UNIT–III | QUESTION–3**

### Control Organizations

**Centralized** – single coordinator
**Distributed** – no coordinator
**Hierarchical** – cluster based

---

## **UNIT–III | QUESTION–4**

### Centralized Deadlock Detection

**Global Wait-For Graph** – dependency

**Cycle** – deadlock

```
P1 → P2 → P1
```

---

## **UNIT–III | QUESTION–5**

### Distributed and Hierarchical Deadlock Detection

### Distributed Detection

**Concept** – no controller
**Working** – probe messages

```
P1 → P2 → P3
↑           |
└───────────┘
```

**Limitation** – message overhead

---

### Hierarchical Detection

**Concept** – cluster based
**Working** – local then global

```
        Global Controller
        /              \
   Local C1          Local C2
```

**Advantage** – scalable
**Limitation** – complex

---

# 📌 UNIT–IV

---

## **UNIT–IV | QUESTION–1**

### Multiprocessor Systems

**Performance** – parallelism
**Reliability** – graceful failure

**Shared Memory** – common memory
**Bus-Based** – single bus
**Crossbar** – multiple paths
**Non-Uniform Memory Access** – local faster

---

## **UNIT–IV | QUESTION–2**

### Operating System Structures

**Master–Slave** – single control
**Symmetric Multiprocessing** – all equal
**Asymmetric Multiprocessing** – fixed roles

---

## **UNIT–IV | QUESTION–3**

### Threads and Synchronization

**Threads** – lightweight process

**Mutex** – exclusive lock
**Semaphore** – counter control
**Spinlock** – busy wait
**Barrier** – phase sync

---

## **UNIT–IV | QUESTION–4**

### Processor Scheduling

**Load balancing** – equal work
**Processor affinity** – cache reuse

**Global Queue** – shared
**Per-CPU Queue** – local

---

## **UNIT–IV | QUESTION–5**

### Distributed File Systems

**Client–Server** – remote access
**Caching** – faster access
**Consistency** – same data
**Fault tolerance** – recovery

---

# 📌 UNIT–V

---

## **UNIT–V | QUESTION–1**

### Load Distributing Issues

**Load measurement** – workload
**Migration cost** – transfer overhead
**Stability** – avoid oscillation

---

## **UNIT–V | QUESTION–2**

### Load Algorithm Components

**Measurement policy** – load info
**Transfer policy** – when move
**Selection policy** – which task
**Location policy** – where move

---

## **UNIT–V | QUESTION–3**

### Load Distributing Algorithms

**Static** – compile time
**Dynamic** – runtime

**Sender-Initiated** – overloaded sends
**Receiver-Initiated** – idle requests

---

## **UNIT–V | QUESTION–4**

### Task Migration

**Preemptive** – suspend & move
**Non-Preemptive** – finish first

**Issues** – state, security

---

## **UNIT–V | QUESTION–5**

### Distributed Shared Memory

**Shared view** – global memory

**Write-Invalidate** – invalidate copies
**Write-Update** – update copies

**Issues** – consistency, performance

