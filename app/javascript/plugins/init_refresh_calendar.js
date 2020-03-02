const initCalendar = () => {
  const btns = document.querySelectorAll('.calendar-btn');

  if (btns) {
    recurse(btns);
  }
  selectSlot();
}

const recurse = (elements) => {
  elements.forEach(element => {
    element.addEventListener('click', (e) => {
      event.preventDefault()
      const url = element.href

      fetch(url).then((response) => {
        return response.text()
      }).then(html => {
        const cont = document.querySelector('#container-calendar')
        cont.innerHTML = ""
        cont.insertAdjacentHTML('beforeend', html)
        const btns = document.querySelectorAll('.calendar-btn');
        selectSlot();
        recurse(btns)
      })
    })
  })
}

const selectSlot = () => {
  const slots = document.querySelectorAll('.card-slot-free');

  if (slots) {
    slots.forEach ((slot) => {
      slot.addEventListener('click', () => {
        // Remove clicked class to previous clicked slot
        const clicked_slot = document.querySelector('.card-slot-clicked');
        if (clicked_slot) {
          clicked_slot.classList.replace('card-slot-clicked','card-slot-free');
        }

        // Add clicked classe to new clicked slot
        slot.classList.replace('card-slot-free', 'card-slot-clicked');

        const date = new Date(slot.dataset.slotYear,slot.dataset.slotMonth,slot.dataset.slotDay, slot.dataset.slotHour);
        //document.getElementById('booking_slot').value = date;
        //console.log(date);

      })
    })
  }

}

export { initCalendar }