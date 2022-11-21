# Lab 8 - Starter

Anish Kulkarni

Teammates : N/A

1. I would run the tests within a Github action that runs whenever code is pushed. This is the most effective approach, as it is more efficient than running all tests locally, but it is effective as well, because we test all the new code pushed before it gets added to the progject - ensuring code is properly checked before merging.


2. No, an end-to-end test is too complex for a simply return value test. It is more effective to use a unit test. 


3. No, a unit test is too small scale to test a full messaging feature. We can potentially test small return values of helper functions, but the whole feature needs an E2E test. 


4. Yes, as it is just one small value, which we can test with Jest easily - no helper functions to consider. 