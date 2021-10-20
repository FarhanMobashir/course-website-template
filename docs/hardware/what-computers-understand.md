---
sidebar_position: 1
---

# What Computers Understand

Computers only understand binary which is 0 and 1. In our daily life we when we want to represent twenty five we just write 25. That's it.

- here 25 means 2 x 10 + 5 x 1 = 20 + 5 = 25.

## live Code editor

```jsx
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
