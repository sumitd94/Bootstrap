## When two or more keys generates the same hash, then its said to be a hash collision. There are two ways in which we can address this collision

* Chaining Method (Solving collision with Chaing)
* Open Addressing (Solving collision with open addressing)

# Chaing Method

In this method, for the same hash, we store multiple values in the form of Objects.
For example, consider a Hash value 6, there are two objects which has the same hashTable

```javascript
{key: 'sumit', value: 'Cook'}
{key: 'Dhanania', value: 'Coder'}
```

Now this both will be stored in the bucket like this
```javascript
[[{key: 'sumit', value: 'Cook'},{key: 'Dhanania', value: 'Coder'}], [...otherHashValue], [...otherHashValue]]
```

> We have our bucket that contains an array of arrays, with each bucketArr containing objects


# Open Addressing

In this method, if we already have a value stored for the given hash, we find the next available slot and store the value in there.