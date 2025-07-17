// ✅ Promise.all - waits for all to succeed, fails fast if any fail
const allSuccess = Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B")
  ]);
  allSuccess
    .then((res) => console.log("✅ Promise.all success:", res)) // ["A", "B"]
    .catch((err) => console.error("❌ Promise.all error:", err));
  
  const allFail = Promise.all([
    Promise.resolve("A"),
    Promise.reject("B failed")
  ]);
  allFail
    .then((res) => console.log("Should not get here:", res))
    .catch((err) => console.error("❌ Promise.all failure:", err));
  
  
  // ✅ Promise.allSettled - always resolves with all results
  Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("B failed")
  ]).then((results) => {
    console.log("✅ Promise.allSettled result:");
    console.table(results);
  });
  
  
  // ✅ Promise.race - resolves/rejects as soon as one settles
  const raceResolve = Promise.race([
    new Promise((res) => setTimeout(() => res("A wins"), 100)),
    new Promise((res) => setTimeout(() => res("B wins"), 50))
  ]);
  raceResolve.then((res) => console.log("🏁 Promise.race resolved:", res)); // "B wins"
  
  const raceReject = Promise.race([
    new Promise((_, rej) => setTimeout(() => rej("Error first"), 50)),
    new Promise((res) => setTimeout(() => res("Shouldn't reach"), 100))
  ]);
  raceReject
    .then((res) => console.log("Should not reach:", res))
    .catch((err) => console.error("❌ Promise.race rejected:", err)); // "Error first"

      // ✅ Promise.any - resolves with first success, fails if all fail
  const anySuccess = Promise.any([
    Promise.reject("Fail A"),
    Promise.resolve("B"),
    Promise.resolve("C")
  ]);
  anySuccess
    .then((res) => console.log("✅ Promise.any result:", res)) // "B"
    .catch((err) => console.error("❌ Promise.any failure:", err));
  
  const anyFail = Promise.any([
    Promise.reject("Fail A"),
    Promise.reject("Fail B")
  ]);
  anyFail
    .then((res) => console.log("Should not get here:", res))
    .catch((err) => {
      console.error("❌ Promise.any all failed:");
      console.log(err instanceof AggregateError); // true
      console.log(err.errors); // array of individual errors
    });
  