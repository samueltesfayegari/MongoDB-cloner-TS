# MongoDB-cloner-TS
This repo just open to ideas, it's created for anyone who needs a mongoDB collection cloner.

A simple utility to clone MongoDB collections from a local database to a remote production database.

## Features
- Copies collections from one MongoDB instance to another.
- Uses environment variables for configuration.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/samueltesfayegari/MongoDB-cloner-TS.git
   ```
   
2. Install dependencies:
   ```bash
   cd MongoDB-cloner-TS 
   ```

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following:
LOCAL_DB_URL=mongodb://localhost:27017/yourLocalDb
DATABASE_URL=mongodb+srv://yourProductionDbUri

## Usage
Run the script:
   ```bash
   node copy-collection.ts
   ```
