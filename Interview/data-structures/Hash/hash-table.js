class HashTable {
  constructor() {
    this.size = 1000;
    this.bucket = Array(this.size).fill(null);
  }

  hash(keyToHash) {
    let hashvalue = 0;

    for(let i = 0; i< keyToHash.length; i += 1) {
      hashvalue += keyToHash[i].charCodeAt();
    }

    return hashvalue % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);
    this.bucket[hash] = value;
  }

  get(key) {
    const hash = this.hash(key);
    return this.bucket[hash];
  }
}

const hashTable = new HashTable();

hashTable.set('sumit', 35)
console.log(hashTable.get('sumit'));
