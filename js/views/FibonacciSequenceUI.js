export default () => {
  return `
    <div
      class="offcanvas offcanvas-top"
      data-bs-backdrop="false"
      tabindex="-1"
      id="fibonacciSequence"
      aria-labelledby="fibonacciSequenceLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="fibonacciSequenceLabel">
          La suite de Fibonacci
        </h5>
        <button
          type="button"
          class="btn-close js-reset-fibonacci"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cupiditate
          a quos magni voluptatum sint molestiae. Quia, ut ipsa. Maiores earum iste
          quam laborum beatae hic laudantium quas quia excepturi.
        </p>
        <!-- = Form Fibonacci -->
        <form id="js-form-fibonacci">
          <label for="js-input-fibonacci" class="form-label">Maximum value</label>
          <input
            type="number"
            class="form-control mb-3"
            id="js-input-fibonacci"
            placeholder="Saisir un nombre"
          />
          <button type="button" id="js-calculate-fibonacci" class="btn btn-primary">
            Lancer le calcul
          </button>
          <button type="button" class="btn btn-danger js-reset-fibonacci">
            Reset
          </button>
        </form>
        <!-- = Form Fibonacci - End -->
        <!-- =  Result Fibonacci -->
        <div id="js-result-fibonacci" class="mt-3"></div>
        <!-- = Result Fibonacci - End -->
      </div>
    </div>
  `;
};
