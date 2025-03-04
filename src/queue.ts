type QNode<T> = {
	value: T;
	next?: QNode<T>;
};
class Queue<T> {
	public length: number;
	private head?: QNode<T>;
	private tail?: QNode<T>;

	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	/*
	 * add to tail
	 */
	enqueue(item: T) {
		const node = { value: item } as QNode<T>;

		this.length++;

		if (!this.tail) {
			this.tail = this.head = node;
			return;
		}

		this.tail.next = node;
		this.tail = node;
	}

	/*
	 * remove from head
	 */
	dequeue(): T | undefined {
		if (!this.head) {
			return;
		}

		const head = this.head;
		this.head = this.head.next;
		head.next = undefined;
		this.length--;

		if (this.length === 0) {
			this.tail = undefined;
		}

		return head.value;
	}

	/* 
	* just check the head without removing it
	*/
	peek(): T | undefined {
		return this.head?.value;
	}
}

export { Queue };