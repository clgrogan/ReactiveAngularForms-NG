import { Component } from "@angular/core";
import { FormArray, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "new-course",
  templateUrl: "./new-course-form-array.component.html",
})
export class NewCourseFormArrayComponent {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    // Add the topic when enter is pressed. submit?
    // (this.form.get("topics") as FormArray).push(new FormControl(topic.value));
    // ^^ refactored to use the property of this class. Get property defined below
    this.topics.push(new FormControl(topic.value));
    topic.value = ""; // clears the value from the input string.
  }

  removeTopic(topic: FormControl) {
    // Removes the topic when the topic list item is clicked.
    console.log("removeTopic executed");
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    // returns the topics FormArray object
    return this.form.get("topics") as FormArray;
  }
}
