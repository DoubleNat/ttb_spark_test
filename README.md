# Test Automation Assignment

โปรเจค Test Automation ครบทุกข้อตามที่โจทย์กำหนด รวม Web, API และ CI/CD Pipeline

[![Playwright](https://img.shields.io/badge/Playwright-Testing-green.svg)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen.svg)](https://nodejs.org/)

---

## 📋 สารบัญ

- [ภาพรวมโปรเจค](#-ภาพรวมโปรเจค)
- [โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [รายละเอียดแต่ละข้อ](#-รายละเอียดแต่ละข้อ)

---

## 🎯 ภาพรวมโปรเจค

โปรเจคนี้ทำตามโจทย์ **Test Automation Assignment** ทั้งหมด 6 ข้อ:

| ข้อ | โจทย์ | ไฟล์ | สถานะ |
|-----|-------|------|--------|
| **1** | Check duplicate items (TypeScript) | [`test_no.1.spec.ts`](tests/test_no.1.spec.ts) | ✅ |
| **2** | Web Login Testing (3 TCs) | [`login.spec.ts`](tests/login.spec.ts) | ✅ |
| **3** | API Testing (2 TCs) | [`api.spec.ts`](tests/api.spec.ts) | ✅ |
| **4** | Jenkins Pipeline | [`Jenkinsfile`](ci/Jenkinsfile) | ✅ |
| **5** | Cipher Decrypt (TypeScript) | [`test_no.5.spec.ts`](tests/test_no.5.spec.ts) | ✅ |

---

## 🏗️ โครงสร้างโปรเจค

```
ttb_spark_test/
├── 📄 README.md                                    # เอกสารโปรเจค
│
├── 📂 ci/
│   └── 📄 Jenkinsfile                              # ✅ ข้อ 4: Jenkins Pipeline
│
├── 📂 resources/
│   ├── 📂 1_page/                                  # Class Page
│   │   ├── 📄 loginPage.ts                         # Login Page
│   │   ├── 📄 logouPage.ts                         # Logout Page
│   │
│   └── 📂 2_api/
│       ├── 📄 mock-api.yaml                        # Mock API
│       ├── 📄 user.api.ts                          # Function API
|    |
│    └── 📄 step.ts                                 # Label Step Name
|    |
│    └── 📄 test_1.ts                               # ✅ ข้อ 1: Check Duplicate List
|    |
│    └── 📄 test_5.ts                               # ✅ ข้อ 5: Check Cipher Encrypt
│
├── 📂 tests/
│   ├── 📄 api.spec.ts                              # ✅ ข้อ 3: API Test (2 TC)
│   └── 📄 login.spec.ts                            # ✅ ข้อ 2: UI Test (3 TC)
│   └── 📄 test_no.1.spec.ts                        # ✅ ข้อ 1: Check Duplicate List
│   └── 📄 test_no.5.spec.ts                        # ✅ ข้อ 5: Check Cipher Encrypt
│
└── 📄 .gitignore
│
├── 📄 README.MD
│
├── 📄 package-lock.json
│
├── 📄 package.json
│ 
└── 📄 playwright.config.ts
     
```

---

## 📝 รายละเอียดแต่ละข้อ

### ข้อ 1: Check Duplicate Items from List A and List B

**ไฟล์:** [`tests/test_no.1.spec.ts`](tests/test_no.1.spec.ts)

**โจทย์:**
```
List A: [1, 2, 3, 5, 6, 8, 9]
List B: [3, 2, 1, 5, 6, 0]
```

**ผลลัพท์:** `[1, 2, 3, 5, 6]`

**วิธีรัน:**
```bash
npx playwright test ./tests/test_no.1.spec.ts
```

---

### ข้อ 2: Web Login Testing

**ไฟล์:** [`tests/login.spec.ts`](tests/login.spec.ts)

**เว็บไซต์:** http://the-internet.herokuapp.com/login

**Test Cases (3 TCs):**
1. ✅ **Login Success** - Valid username and password
2. ✅ **Login Failed - Password Incorrect** - Wrong password
3. ✅ **Login Failed - Username Not Found** - Invalid username

**Credentials:**
- Username: `tomsmith`
- Password: `SuperSecretPassword!`

**วิธีรัน:**
```bash
npm run test-ui
```

---

### ข้อ 3: API Testing (REST API)

**ไฟล์:** [`tests/api.spec.ts`](tests/api.spec.ts)

**API Endpoint:** https://reqres.in/api/users/{id}

**Test Cases (2 TCs):**
1. ✅ **Get User Profile Success** (ID: 12) → Status 200
   - Verify: ID, Email, First Name, Last Name, Avatar
2. ✅ **Get User Profile but user not found** (ID: 1234) → Status 404
   - Verify: Empty body `{}`

**วิธีรัน:**
```bash
npm run test-api
```

---

### ข้อ 4: Jenkins Pipeline

**ไฟล์:** [`ci/Jenkinsfile`](ci/Jenkinsfile)

**Pipeline Stages (7 stages):**
1. ✅ **Checkout Code From Git** 
2. ✅ **Setup Node.js**
3. ✅ **Install Dependencies** 
4. ✅ **Run UI Test** 
5. ✅ **Run API Test** 
6. ✅ **Run Function Test Test** 
7. ✅ **Archive Playwright Report**

---

### ข้อ 5: Cipher Decryption

**ไฟล์:** [`test_no.5.spec.ts`](tests/test_no.5.spec.ts)

**TypeScript Function:** [`resources/test_5.ts`](resources/test_5.ts)

**โจทย์:**
```typeScript
encrypted = 'VTAOG'
k = 2
# Result: 'TRYME'
```

**วิธีรัน:**
```bash
npx playwright test ./tests/test_no.5.spec.ts
```

## 👨‍💻 Author

**Nattawut Sonthi**
- GitHub: [@DoubleNat](https://github.com/DoubleNat)
- Repository: [ttb_spark_test](https://github.com/DoubleNat/ttb_spark_test)
