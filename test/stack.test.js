class Stack {

    constructor() {
        this.items = {}
        this.length = 0
        this.top = -1
    }

    push(item) {
        this.top += 1
        this.length += 1
        this.items[this.top] = item
    }

    pop() {
        if (this.isEmpty) {
            return null
        }
        const item = this.items[this.top]
        delete this.items[this.top]
        this.top -= 1
        this.length -= 1
        return item
    }

    get peek()
    {
        return this.top == -1 ? null : this.items[this.top]
    }

    get isEmpty() {
        return this.length === 0
    }
}

describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack()
    })

    it('it is created empty', () => {
        expect((stack).length).toBe(0)
        expect(stack.isEmpty).toBe(true)
        expect(stack.peek).toBe(null)
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })

    it('can push to the top', () => {
        stack.push('hello')
        expect(stack.length).toBe(1)
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('hello')
    })

    it('can pop off', () => {
        stack.pop()
        expect(stack.length).toBe(0)
        expect(stack.top).toBe(-1)
        expect(stack.peek).toBe(null)
        expect(stack.items).toEqual({})
    })

    // it.todo('can can search for items')
})