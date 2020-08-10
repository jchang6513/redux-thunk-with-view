export class ViewStates {
  private state = {
    layoutBgColor: 0,
  }

  private listeners: Array<()=>void> = [];

  setState(s: object) {
    this.state = {
      ...this.state,
      ...s,
    };
    this.listeners.forEach(l => l());
  }

  getState() {
    return this.state;
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener)
      this.listeners.splice(index, 1)
    }
  }
}

const viewStates = new ViewStates();

export default viewStates;
