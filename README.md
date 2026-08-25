# URL SHORTENER
   - RestAPIs, Database Schemas, ID generation, Hashing, Indexing, Basic Hashing , Type of Rate limiting & applying it to our project  

## Tech Stacks 
Backend --> Node/Express js (Typescript) <br />
Frotend --> Reactjs , Tailwindcss (Typescript)

---
Eg. 

---
## Phases 
**Phase 1** -> Understand the Problem (Functional & Non-Functional Requirements)<br />
**Phase 2** -> Break into Modules<br />
**Phase 3** -> Database Design<br />
**Phase 4** -> API Design <br />
**Phase 5** -> URL Generation<br />
**Phase 6** -> Redirect Flow<br />
**Phase 7** -> Analytics<br />
**Phase 8** -> Security<br />
**Phase 9** -> Scaling Q&A

## Versions 

### Version 1

$Basic$ $CRUD$
```
Client
   ↓
  Node
   ↓
MongoDB
```
**Learn**
- REST
- Database
- Routing
- Validation
---
### Version 2
$Unique$ $short$ $code$ $generation$

**Learn**
- Hashing
- Base62
- Collision handling
---
### Version 3

$Analytics$

**Learn**
- Counters
- Atomic updates
- Indexes
- Aggregation
---
### Version 4

$Caching$
```
Redis
   ↓
Redirect
```
$Learn$
- Cache Aside
- TTL
- Cache Miss
---
### Version 5

- Authentication
- JWT
- Users
- My URLs
---
### Version 6

- Rate Limiting
- Prevent abuse
- Redis
- Sliding Window
- Token Bucket
---
### Version 7

- Docker
- Containerize
---
### Version 8

- CI/CD
- GitHub Actions
- Deploy
---
### Version 9
$System$ $Design$

**Draw architecture**
```
Client
   ↓
Load Balancer
   ↓
API Servers
   ↓
Redis
   ↓
Mongo Primary
   ↓
Mongo Replica
```
Then imagine <br />
Millions of requests.

## Functional Req.
- User submits long URL
- Generate short URL
- Redirect
- Store mapping
- Expiration support
- Analytics
- Custom alias
- QR Code (later)

## Non Functional Req.
- Fast?
- Scalable?
- Highly available?
- Secure?
- Reliable?

## Workflow
```
API Layer
   ↓
Validation
   ↓
Business Logic
   ↓
Database
   ↓
Redirect Service

Analytics
   ↓
Cache
   ↓
Logger
   ↓
Rate Limiter
```
---
## Questions You Should Continuously Ask Yourself

> Every feature should begin with questions.

For example:

**URL generation**
- Why not UUID?
- Why Base62?
- Why 7 characters?
- Collision probability?
- Should IDs be sequential?

**Database**
- Why MongoDB?
- Why not PostgreSQL?
- Why index shortCode?
- Why not store analytics separately?

**Redirect**
- 301 vs 302?
- When to cache?
- How cache invalidation works?

**Security**
- Open redirect attack?
- Spam links?
- Malicious URLs?

**Scaling**
- Read-heavy or write-heavy?
- How many DB reads per redirect?
- Can Redis reduce latency?

**Reliability**
- What if Redis crashes?
- What if Mongo crashes?
- What if one server dies?
---

### What You'll Learn

> If you build this properly, you'll gain hands-on experience with:

**Backend Engineering**
- REST API design
- Input validation
- Error handling
- Middleware
- Authentication & authorization
- Logging

**Database Design**
- Schema design
- Indexing
- TTL indexes
- Aggregation
- Atomic updates

**Data modeling**
- Performance
- Caching with Redis
- Profiling
- Response optimization
- Query optimization

**System Design**
- Load balancing
- Database replication
- Sharding concepts
- High availability

**Scalability**
- Consistency trade-offs
- Stateless services

**DevOps**
- Docker
- Environment management
- Deployment
- CI/CD
- Monitoring
- Health checks

**Software Engineering**
- Modular architecture
- Clean code
- Testing
- Documentation
- Git workflows
---