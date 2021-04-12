class HashTable {
  constructor() {
    this.size = 16;
    this.bucket = Array(this.size).fill(null).map(() => []);
  }

  hash(keyToHash) {
    let hashvalue = 0;

    for(let i = 0; i< keyToHash.length; i += 1) {
      hashvalue += keyToHash[i].charCodeAt();
    }

    return hashvalue % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    const bucketArr = this.bucket[keyHash];
    const storedEle = bucketArr.find((element) => element.key === key);

    if(storedEle) {
      storedEle.value = value;
      return;
    }

    bucketArr.push({key, value});
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArr = this.bucket[keyHash];

    const storedEle = bucketArr.find((element) => element.key === key);

    return storedEle;
  }

  showInfo() {
    for(let key in this.bucket) {
      if (this.bucket[key] && this.bucket[key].length > 0) {
        console.log(key, this.bucket[key]);
      }
    }
  }
}

const hashTable = new HashTable();
hashTable.set('sumit', 'isAwesome');
console.log(hashTable.showInfo());