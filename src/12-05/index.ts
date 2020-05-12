function isOdd(num: number): boolean {
  return num % 2 === 1;
}

export const singleNonDuplicate = (nums: number[]): number => {
  for (let i = 1; i < nums.length; i = i + 2) {
    const num = nums[i];
    const prevNum = nums[i - 1];
    if (num !== prevNum) return prevNum;
  }

  return nums[nums.length - 1];
};

export const singleNonDuplicateLogN = (originalNumbers: number[]): number => {
  function doWork(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    const middleIndex = Math.floor(nums.length / 2);
    const middle = nums[middleIndex];
    const leftList = nums.slice(0, middleIndex);
    const rightList = nums.slice(middleIndex + 1);

    const doesMiddleMatchLastLeft = middle === leftList[leftList.length - 1];
    const doesMiddleMatchFirstRight = middle === rightList[0];

    if (!doesMiddleMatchLastLeft && !doesMiddleMatchFirstRight) return middle;

    if (isOdd(leftList.length)) {
      return doWork(doesMiddleMatchLastLeft ? rightList : leftList);
    } else {
      return doWork(
        doesMiddleMatchLastLeft ? leftList.slice(0, -1) : rightList.slice(1)
      );
    }
  }

  return doWork(originalNumbers);
};
