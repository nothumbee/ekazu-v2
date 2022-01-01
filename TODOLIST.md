move Axios from components
move ./helpers from components

on unset Považovat za skryté vyšetření delete the values malus,...

rename id to path

rename all inputs and so, according to structure and refactor them

initialValues on form:
set values other than defined in the form stays there (id, order)
works the same way as setFieldsValue

edit template:
before:
after: reset orders

duplicate template:
before: remove ids
after: reset orders

pridat remove method do image upload

add conditional Title and final button label showing in add, edit, duplicate form

pridat asPrice formatter do price

add error fallback - save to local storage

fix removeing and reordering generators

add prop types everywhere

predelat guess form

https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc

#else

Maybe create css or sass naming convention, according to atomic design

Atoms classes are named like .checkbox

Organism

Pages .-mapPage

Visual modifiers -small -lg

State modifiers = usually only utility function --active, --disabled, --hidden

DONE udelat kompaktnejsi design
