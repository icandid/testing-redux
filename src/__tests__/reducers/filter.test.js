import { setFilter, clearFilter } from '../../actions'
import filterReducer from '../../reducers/filter'

let state

beforeEach(() => {
    state = filterReducer(undefined, {})
})

test('initial state should be false (no filter)', () => {
    expect(state).toBe(false)
})

test('setFilter action should change filter state', () => {
    const category = 'test'
    const action = setFilter(category)
    state = filterReducer(state, action)
    expect(state).toBe(category)
})

test('clearFilter action should reset filter state', () => {
    const category = 'test'
    state = filterReducer(state, setFilter(category))
    expect(state).toBe(category)

    const action = clearFilter()
    state = filterReducer(state, action)
    expect(state).toBe(false)
})
