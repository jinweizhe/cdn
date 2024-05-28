// 这里是对数组进行处理的一系列的方法
// 方法的具体使用教程查看:https://www.yuque.com/jinweizhe/oppfph/dl0f9hhs3zeogir7?singleDoc# 《Array.js使用》
// 计算百分比
export function calculatePercentages(data) {
  // 计算总和
  const total = data.reduce((acc, val) => acc + val, 0);
  const percentages = [];
  // 计算每个数据项的百分比，并取整
  for (let i = 0; i < data.length; i++) {
    const percentage = Math.round((data[i] / total) * 100);
    percentages.push(percentage + '%'); // 在这里添加百分号
  }
  // 对最后一个数据项进行修正以确保总和为 100%
  const totalPercentage = percentages.reduce((acc, val) => acc + parseInt(val), 0);
  const lastPercentageAdjustment = 100 - totalPercentage;
  percentages[percentages.length - 1] = (parseInt(percentages[percentages.length - 1]) + lastPercentageAdjustment) + '%';
  return percentages;
}
