import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello from halt_controller.js")
  }
  
  static targets = ["form"]

  halt(event) {
    event.preventDefault()
    event.stopPropagation()
    console.log("halted")
  }

  search() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.formTarget.requestSubmit()
    }, 500)
  }
}
