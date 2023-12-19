export interface ClassesObj {
  [key: string]: boolean,
}

export const classesNames = (classes: ClassesObj): string => {
  const aviableClasses = Object.keys(classes);

  const resultClasses = aviableClasses.filter((k) => classes[k]);

  return resultClasses.join(' ');
};
