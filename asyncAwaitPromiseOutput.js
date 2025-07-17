function logWithTime(message) {
    const now = ((Date.now() - startTime) / 1000).toFixed(1) + "s";
    console.log(`[${now}] ${message}`);
  }
  
  const startTime = Date.now();
  
  async function test10Seconds() {
    logWithTime("🔁 Starting test10Seconds (both promises created upfront)");
  
    const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 10000)); // 10s
    const p2 = new Promise((res) => setTimeout(() => res("P2 done"), 5000));  // 5s
  
    const result1 = await p1;
    logWithTime("✅ p1 resolved: " + result1);
  
    const result2 = await p2; // p2 is already done by now
    logWithTime("✅ p2 resolved: " + result2);
  }
  
  async function test15Seconds() {
    logWithTime("\n🔁 Starting test15Seconds (p2 created after p1 finishes)");
  
    const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 10000)); // 10s
  
    const result1 = await p1;
    logWithTime("✅ p1 resolved: " + result1);
  
    const p2 = new Promise((res) => setTimeout(() => res("P2 done"), 5000)); // starts now
  
    const result2 = await p2;
    logWithTime("✅ p2 resolved: " + result2);
  }
  
  (async () => {
    await test10Seconds(); // ⏱️ Total: ~10s
    await test15Seconds(); // ⏱️ Total: ~15s
  })();
  

//  [0.0s] 🔁 Starting test10Seconds (both promises created upfront)
// [10.0s] ✅ p1 resolved: P1 done
// [10.0s] ✅ p2 resolved: P2 done
// [10.0s] 
// 🔁 Starting test15Seconds (p2 created after p1 finishes)
// [20.0s] ✅ p1 resolved: P1 done
// [25.0s] ✅ p2 resolved: P2 done

// === Code Execution Successful ===