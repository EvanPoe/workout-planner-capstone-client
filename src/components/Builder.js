import React, { Component } from "react";

export class Builder extends Component {
  render() {
    return (
      <div className="workout-builder">
        <h3 className="builder-title">Workout Builder</h3>
        <form>
          <fieldset className="builder-fieldset">
            <label className="difficulty-label" htmlFor="difficulty">
              Please select level of desired workout difficulty.
            </label>
            <select name="difficulty" className="select-difficulty">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <label className="type-label" htmlFor="type">
              Please select the type of workout desired.
            </label>
            <select name="type" className="select-type">
              <option value="upper">Upper</option>
              <option value="lower">Lower</option>
            </select>
            <section className="builder-submits">
              <input className="builder-cancel" type="submit" value="Cancel" />
              <input className="builder-create" type="submit" value="Create" />
            </section>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Builder;
