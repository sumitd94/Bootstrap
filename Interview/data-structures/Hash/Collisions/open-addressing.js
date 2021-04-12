class HashTable {
  constructor() {
    this.size = 100;
    this.bucket = Array(this.size).fill(null);
  }

  hash(keyToHash) {
    let hashvalue = 0;

    for (let i = 0; i< keyToHash.length; i += 1) {
      hashvalue += keyToHash[i].charCodeAt();
    }

    return hashvalue % this.size;
  }

  set(key, value) {
    let keyHash = this.hash(key);
    if (this.bucket[keyHash] === null || this.bucket[keyHash].key === key) {
      this.bucket[keyHash] = {key, value}
    } else {
      while(this.bucket[keyHash] !== null) {
        keyHash++;
      }

      this.bucket[keyHash] = {key, value}
    }
  }

  get(key) {
    const keyHash = this.hash(key);

    for (let i = keyHash; i < this.bucket.length; i += 1) {
      if (!this.bucket[keyHash]) continue;

      if (this.bucket[keyHash].key === key) {
        return this.bucket[keyHash].value;
      }
    }

    return undefined;
  }

  showInfo() {
    for(let key in this.bucket) {
      if (this.bucket[key]) {
        console.log(key, this.bucket[key]);
      }
    }
  }
}

const hashTable = new HashTable();

for (const char of 'sumit') {
  hashTable.set(char,char);
}

for (const char of 'DHanania') {
  hashTable.set(char, char);
}

console.log(hashTable.showInfo());