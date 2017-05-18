export function* helloSaga() {
	// yield 'hello';
	// yield 'world';
	// return 'ending';
	console.log('hahahah');
}
export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', helloSaga)
}