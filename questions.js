const QUESTIONS = [
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A technician opens a disconnect, locks it and tags it. What must be done next, before touching any conductors inside the equipment?",
    "options": {
      "A": "Place a second tag on the thermostat and then remove the disconnect door.",
      "B": "Set the thermostat to the off position and trust that the unit is dead.",
      "C": "Verify with a meter that the power is off, testing a known live source before and after.",
      "D": "Remove the fuses with insulated pliers and assume the circuit has no stored energy left."
    },
    "answer": "C",
    "explanation": "Verification with a meter, using the live-dead-live sequence, is the only way to prove the circuit is de-energized. Tagging the thermostat does nothing, since it controls only low-voltage relays. A thermostat in the off position leaves line voltage at the contactor. Pulling fuses without testing assumes stored energy is gone, and capacitors can still hold a charge.",
    "id": 1
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A recovery cylinder is being filled with liquid refrigerant. What is the maximum safe fill limit, and why does it exist?",
    "options": {
      "A": "80 percent of capacity, so liquid expansion with temperature rise cannot burst the cylinder.",
      "B": "95 percent of capacity, so the cylinder holds the most refrigerant possible and the vapor stays low.",
      "C": "100 percent of capacity, since the steel walls are strong enough to hold any pressure rise.",
      "D": "60 percent of capacity, because any higher amount makes the refrigerant change into a different compound."
    },
    "answer": "A",
    "explanation": "The limit is 80 percent, which leaves a vapor space so that heat-driven liquid expansion does not create a bursting pressure. Filling to 95 percent or 100 percent leaves no cushion, and a small temperature rise can rupture the cylinder. A figure of 60 percent has no regulatory basis, and refrigerant does not change compounds because of fill level.",
    "id": 2
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A worker with wet hands and a body resistance of about 1,000 ohms touches a 240-volt conductor. About how much current flows through the body?",
    "options": {
      "A": "About 24 milliamps, which is enough to feel but is considered harmless.",
      "B": "About 2.4 amperes, which would blow a typical breaker before any harm occurs.",
      "C": "About 4.2 milliamps, which feels like a mild tingle and is easy to release.",
      "D": "About 240 milliamps, which is far above the level that can stop the heart."
    },
    "answer": "D",
    "explanation": "Using Ohm's law, current equals 240 volts divided by 1,000 ohms, which is 0.24 ampere or 240 milliamps. This is well above the roughly 100 milliamps that can cause ventricular fibrillation. A tenth of that value would be 24 milliamps, still dangerous, and the 2.4 amperes figure is a decimal error. A breaker would not trip fast enough to protect a person.",
    "id": 3
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "Why must dry nitrogen flow through copper tubing while it is being brazed?",
    "options": {
      "A": "It cools the joint so the filler metal solidifies before it can flow into the gap.",
      "B": "It prevents copper oxide scale from forming inside the tube, scale that could plug small passages later.",
      "C": "It raises the pressure inside the line so that molten filler is pushed fully into the joint.",
      "D": "It burns off flux residue from the outside of the joint, leaving a bright clean surface."
    },
    "answer": "B",
    "explanation": "Nitrogen is inert and displaces air, which prevents oxidation of the hot inside surface of the copper. Without it, black flakes form and later plug filter driers, metering devices and oil passages. Cooling the joint would keep filler from flowing, a high pressure can blow filler out, and nitrogen does not burn flux off the outside.",
    "id": 4
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "Which gas may be used with a regulator to pressure test a refrigeration system for leaks?",
    "options": {
      "A": "Compressed shop air, because it is cheap and dry enough after passing a filter.",
      "B": "Pure oxygen, because it has the highest pressure available from a standard cylinder.",
      "C": "A mixture of acetylene and air, since both are easy to find on a job.",
      "D": "Dry nitrogen, because it is inert and does not add moisture or support combustion."
    },
    "answer": "D",
    "explanation": "Dry nitrogen is inert and dry. Shop air carries moisture, and air plus refrigeration oil under compression can create an explosion hazard. Oxygen reacts violently with oil and can cause fires. Acetylene is a fuel gas and decomposes explosively at pressures above about 15 psi, so it can never be used for pressure testing.",
    "id": 5
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A ladder must reach the edge of a roof 16 feet above the ground. Using the 4-to-1 rule, how far from the wall should the base be placed?",
    "options": {
      "A": "2 feet from the wall, which gives a steep and stable angle.",
      "B": "8 feet from the wall, which gives a shallow and comfortable angle.",
      "C": "6 feet from the wall, which gives the angle of an average stepladder.",
      "D": "4 feet from the wall, which is one quarter of the height."
    },
    "answer": "D",
    "explanation": "The 4-to-1 rule puts the base one foot out for each four feet of height, so 16 divided by 4 is 4 feet. Two feet makes the ladder too steep and likely to tip backward. Six or eight feet makes it too shallow, so the ladder can slide out at the base and the rails carry more bending load.",
    "id": 6
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A technician measures a capacitor labeled 35 microfarads with a tolerance of plus or minus 6 percent. Which reading is acceptable?",
    "options": {
      "A": "36.8 microfarads, which is inside the allowed range of 32.9 to 37.1.",
      "B": "31.0 microfarads, which is inside the allowed range of 28.0 to 42.0.",
      "C": "38.5 microfarads, which is inside the allowed range of 36.0 to 40.0.",
      "D": "32.0 microfarads, which is inside the allowed range of 29.4 to 40.6."
    },
    "answer": "A",
    "explanation": "Six percent of 35 is 2.1, so the acceptable range is 32.9 to 37.1 microfarads, and 36.8 falls inside it. The reading of 32.0 is below the 32.9 low limit, and 38.5 is above the 37.1 high limit, so both fail. The ranges quoted with the other readings are not the true tolerance, which is only 6 percent either side of 35, so none of those readings pass.",
    "id": 7
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "Why is vapor from a large refrigerant leak dangerous in a small closed machinery room even if the refrigerant is not poisonous?",
    "options": {
      "A": "It displaces oxygen because it is heavier than air and settles low, which can cause suffocation.",
      "B": "It always ignites at room temperature once it mixes with the air in the room.",
      "C": "It raises the oxygen level above normal, which makes the air too rich to breathe safely.",
      "D": "It lowers the humidity of the room to nearly zero, which dries out the lungs quickly."
    },
    "answer": "A",
    "explanation": "Refrigerant vapor is heavier than air, collects near the floor and pushes out oxygen, creating an oxygen-deficient space below 19.5 percent. Most refrigerants do not ignite at room temperature. Oxygen level goes down and not up with a leak, and refrigerant does not change humidity enough to harm the lungs.",
    "id": 8
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A technician wants to measure a deep vacuum during evacuation. Which instrument is the correct choice?",
    "options": {
      "A": "A manifold gauge set, because its low-side gauge reads vacuum in inches of mercury.",
      "B": "A bimetal dial thermometer clamped to the suction line near the compressor.",
      "C": "A clamp meter set to read amperes on the vacuum pump motor wire.",
      "D": "A micron gauge connected to the system, as far from the pump as practical."
    },
    "answer": "D",
    "explanation": "A micron gauge reads the very small absolute pressures of a deep vacuum, with a target of about 500 microns or less. Manifold gauges lack the resolution for that range. A thermometer cannot read vacuum depth, and the pump's amp draw says nothing about system pressure, so neither shows when evacuation is complete.",
    "id": 9
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A technician's meter reads 118 volts on a known live outlet before testing, 0 volts on the equipment, and 0 volts on the outlet afterward. What does the last reading mean?",
    "options": {
      "A": "The outlet has failed, so the test of the equipment is still valid.",
      "B": "The meter or its leads failed during the test, so the equipment is not proven dead.",
      "C": "The circuit is confirmed dead, because both readings agree with each other.",
      "D": "The outlet breaker tripped, which means the equipment is safe to touch."
    },
    "answer": "B",
    "explanation": "The final live check is meant to prove the meter still works. A zero reading on a source known to be live shows the meter or leads failed, so the earlier zero on the equipment proves nothing, and the test must be repeated with a working meter. Agreement between zero readings does not confirm a dead circuit, and a tripped outlet breaker would not make a separate unit safe.",
    "id": 10
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "What is the difference between heat and temperature?",
    "options": {
      "A": "Heat measures how intense the energy is, while temperature measures the total amount of energy present.",
      "B": "Heat is energy in transit that is measured in BTU, while temperature shows how intense it is.",
      "C": "Heat and temperature are the same quantity, measured with thermometers in different scales.",
      "D": "Heat is measured in degrees on a thermometer, while temperature is measured only in BTU."
    },
    "answer": "B",
    "explanation": "Heat is an amount of thermal energy, counted in BTU, and temperature shows how intense that heat is, read in degrees. Saying heat measures intensity and temperature measures total energy swaps the two definitions. The claim that they are the same quantity ignores that a pool and a bucket at one temperature hold very different amounts of heat. Describing temperature as the energy counted in BTU reverses the units.",
    "id": 11
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "How much heat is needed to melt 25 pounds of ice at 32 degrees Fahrenheit into water at 32 degrees Fahrenheit?",
    "options": {
      "A": "25 BTU, because each pound needs one BTU for every degree it changes.",
      "B": "3,600 BTU, because melting takes 144 BTU for each pound of ice.",
      "C": "24,250 BTU, because melting takes 970 BTU for each pound of ice.",
      "D": "800 BTU, because melting takes 32 BTU for each pound of ice."
    },
    "answer": "B",
    "explanation": "Latent heat of fusion for water is 144 BTU per pound, so 25 times 144 is 3,600 BTU. A figure of 25 BTU treats melting as a one-degree sensible change, but the temperature does not change. The 970 BTU per pound figure belongs to boiling, not melting. Using 32 BTU per pound confuses the freezing point temperature with an amount of heat.",
    "id": 12
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A gauge on a sealed system reads 118 psig at sea level. What is the absolute pressure?",
    "options": {
      "A": "103.3 psia, found by subtracting atmospheric pressure from the gauge reading.",
      "B": "118.0 psia, since gauge and absolute pressure are the same at sea level.",
      "C": "132.7 psia, found by adding atmospheric pressure to the gauge reading.",
      "D": "147.0 psia, found by multiplying the gauge reading by the 1.25 correction."
    },
    "answer": "C",
    "explanation": "Absolute pressure equals gauge pressure plus atmospheric pressure, so 118 plus 14.7 is 132.7 psia. Subtracting atmospheric pressure goes the wrong direction. Gauge and absolute readings differ by about 14.7 psi at sea level and agree only in a perfect vacuum. No 1.25 multiplier exists in the relationship.",
    "id": 13
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Airflow across a coil is 1,000 CFM, and the air temperature drops from 78 to 58 degrees Fahrenheit. What sensible heat is removed?",
    "options": {
      "A": "21,600 BTU/hr, found with 1.08 multiplied by 1,000 and by the 20-degree drop.",
      "B": "62,640 BTU/hr, found with 1.08 multiplied by 1,000 and by the 58-degree reading.",
      "C": "10,800 BTU/hr, found with 1.08 multiplied by 1,000 and by half the drop.",
      "D": "20,000 BTU/hr, found with the 1,000 CFM multiplied by the 20-degree drop."
    },
    "answer": "A",
    "explanation": "The formula uses delta T, which is 78 minus 58, or 20 degrees, so 1.08 times 1,000 times 20 is 21,600 BTU/hr. Using the supply temperature itself ignores the fact that only the difference matters. Using half the drop halves the answer without reason, and leaving out the 1.08 factor drops the density and specific heat of air.",
    "id": 14
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A chilled-water coil receives 24 GPM and the water temperature rises 12 degrees Fahrenheit. How many tons does the coil absorb?",
    "options": {
      "A": "6 tons, since 500 times 24 times 12 equals 144,000 BTU/hr.",
      "B": "3 tons, since 500 times 24 divided by 12 equals 1,000 BTU/hr.",
      "C": "12 tons, since 500 times 24 times 12 equals 144,000 BTU/hr.",
      "D": "24 tons, since 500 times 24 times 12 equals 288,000 BTU/hr."
    },
    "answer": "C",
    "explanation": "Q equals 500 times GPM times delta T, which is 500 times 24 times 12, or 144,000 BTU/hr. Dividing by 12,000 BTU/hr per ton gives 12 tons. The 6 ton answer reaches the right BTU/hr figure but divides it wrongly. The statement that divides by the temperature change uses the formula incorrectly. The 24 ton answer miscalculates the product by doubling it.",
    "id": 15
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Why does water boil at a lower temperature at 5,000 feet than at sea level?",
    "options": {
      "A": "Atmospheric pressure is lower at altitude, so less heat is needed to reach saturation.",
      "B": "The water holds less dissolved oxygen at altitude, which changes its specific heat.",
      "C": "Gravity is much weaker at altitude, which lets the water particles escape easily.",
      "D": "The air is colder at altitude, which cools the water below its normal boiling temperature."
    },
    "answer": "A",
    "explanation": "Boiling point depends on the pressure over the liquid, and atmospheric pressure falls from 14.7 psi at sea level to about 12.2 psi at 5,000 feet, so the saturation temperature falls to about 203 degrees Fahrenheit. Dissolved oxygen does not set the boiling point. Gravity changes only a trivial amount over that height. Cold air does not lower the boiling point of water.",
    "id": 16
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A compound gauge reads 25 inches of mercury vacuum at sea level. About what is the absolute pressure in psia?",
    "options": {
      "A": "2.4 psia, found from 4.92 inches of mercury remaining times 0.491.",
      "B": "12.3 psia, found from 25 inches of mercury times 0.491.",
      "C": "14.7 psia, since a vacuum reading does not change the absolute value.",
      "D": "7.4 psia, found by halving the standard atmospheric pressure."
    },
    "answer": "A",
    "explanation": "Absolute pressure equals 29.92 minus 25, or 4.92 inches of mercury, and 4.92 times 0.491 is about 2.4 psia. Multiplying the vacuum reading itself by 0.491 gives the amount of vacuum in psi, 12.3, and not the pressure that remains. Atmospheric pressure is 14.7 psia only with no vacuum. Halving atmospheric pressure is arbitrary and does not match the reading.",
    "id": 17
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A coil removes 24,000 BTU/hr of sensible heat and 6,000 BTU/hr of latent heat. What is the sensible heat ratio?",
    "options": {
      "A": "0.20, since latent heat divided by total heat describes the sensible share.",
      "B": "0.25, since latent heat divided by sensible heat describes the sensible share.",
      "C": "0.60, since sensible heat divided by twice the latent heat describes the share.",
      "D": "0.80, since sensible heat divided by total heat describes the sensible share."
    },
    "answer": "D",
    "explanation": "The sensible heat ratio is sensible heat divided by total heat, which is 24,000 divided by 30,000, or 0.80. A result of 0.20 is the latent share, the opposite quantity. A result of 0.25 divides the latent heat by the sensible heat, which is not a ratio of any standard use here. The value of 0.60 comes from a formula that does not exist.",
    "id": 18
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A sealed nitrogen cylinder at 70 degrees Fahrenheit is moved to a 110-degree truck bed. What happens to the pressure?",
    "options": {
      "A": "It stays the same, because the volume of the cylinder is fixed and rigid.",
      "B": "It falls, because warm gas expands and becomes less dense inside the container.",
      "C": "It rises, because pressure grows with absolute temperature when volume is fixed.",
      "D": "It falls by half, because the gas gives up heat to the metal wall."
    },
    "answer": "C",
    "explanation": "With a fixed volume, absolute pressure is proportional to absolute temperature, so the pressure rises as the cylinder warms. A rigid container still shows a pressure change, so the claim that pressure stays the same is wrong. The gas cannot expand in a rigid cylinder, so density does not fall. The halving claim has no physical basis, and heat flows into the gas from the warmer surroundings.",
    "id": 19
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Which statement correctly describes latent heat?",
    "options": {
      "A": "It is the heat that changes a substance's temperature without any change of state.",
      "B": "It is the heat that changes a substance's state without any change in temperature.",
      "C": "It is the heat carried only by radiation across a space with no air in it.",
      "D": "It is the heat measured by a dry bulb thermometer placed in moving air."
    },
    "answer": "B",
    "explanation": "Latent heat is absorbed or released while a substance changes state, such as boiling or melting, and the temperature stays constant during the change. The first description defines sensible heat instead. Radiation is a separate transfer method and is not the same as latent heat. A dry bulb thermometer reads sensible temperature, which is exactly what latent heat does not change.",
    "id": 20
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "Which component separates the high-pressure side from the low-pressure side at the compressor end of the loop?",
    "options": {
      "A": "The compressor, which raises the vapor pressure and sends it toward the condenser.",
      "B": "The metering device, which drops the liquid pressure before it enters the evaporator.",
      "C": "The condenser, which turns the hot vapor into liquid at high pressure.",
      "D": "The evaporator, which boils the liquid refrigerant at low pressure inside the coil."
    },
    "answer": "A",
    "explanation": "The compressor is one of the two dividing lines in the system, raising pressure at the outlet and holding low pressure at the inlet. The metering device is the other dividing line, but it sits at the evaporator end of the loop and not at the compressor end. The condenser and evaporator are coils that sit within the high side and low side respectively, and neither one separates the two sides.",
    "id": 21
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "An R-410A system shows 118 psig on the suction gauge, which corresponds to 40 degrees, and a suction line temperature of 53 degrees. What is the superheat?",
    "options": {
      "A": "93 degrees, found by adding the two temperature readings together.",
      "B": "13 degrees, found by subtracting saturation temperature from the line temperature.",
      "C": "40 degrees, found by reading the saturation temperature from the pressure chart.",
      "D": "53 degrees, found by reading the suction line temperature directly."
    },
    "answer": "B",
    "explanation": "Superheat is the actual vapor temperature minus the saturation temperature at that pressure, so 53 minus 40 is 13 degrees. Adding the two readings gives a number with no physical meaning. The saturation temperature alone is the boiling point and not the superheat. The line temperature alone ignores the saturation temperature, which is needed to find how far above boiling the vapor sits.",
    "id": 22
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A liquid line pressure corresponds to a saturation temperature of 105 degrees, and the liquid line measures 96 degrees. What is the subcooling?",
    "options": {
      "A": "201 degrees, found by adding the saturation and liquid line temperatures.",
      "B": "96 degrees, found by reading the liquid line temperature on the probe.",
      "C": "9 degrees, found by subtracting the line temperature from the saturation temperature.",
      "D": "105 degrees, found by reading the condensing temperature on the pressure chart."
    },
    "answer": "C",
    "explanation": "Subcooling equals the saturation temperature at liquid pressure minus the actual liquid line temperature, so 105 minus 96 is 9 degrees. Adding the readings makes no physical sense. The line temperature alone does not say how far below saturation the liquid sits. The saturation temperature alone is the condensing point and not the amount of cooling below it.",
    "id": 23
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A compressor draws 2.5 kW while the evaporator absorbs 30,000 BTU/hr. About how much heat does the condenser reject, assuming all compressor power becomes work on the refrigerant?",
    "options": {
      "A": "About 21,470 BTU/hr, since 8,530 BTU/hr of compressor heat is subtracted from 30,000.",
      "B": "About 38,530 BTU/hr, since 2.5 kW is 8,530 BTU/hr added to 30,000.",
      "C": "About 30,000 BTU/hr, since the condenser rejects only what the evaporator absorbed.",
      "D": "About 32,500 BTU/hr, since 2.5 is simply added to the evaporator load."
    },
    "answer": "B",
    "explanation": "The condenser must reject the evaporator heat plus the compressor work. Converting, 2.5 kW times 3,412 is about 8,530 BTU/hr, so the total is about 38,530 BTU/hr. Subtracting would imply that the compressor removes heat, which is backward. Ignoring compressor heat violates the energy balance. Adding 2.5 directly mixes kilowatts with BTU/hr.",
    "id": 24
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "Which statement describes how a thermostatic expansion valve maintains superheat?",
    "options": {
      "A": "A stepper motor follows a program that ignores the temperature of the suction line.",
      "B": "A fixed hole passes the same flow regardless of the load or the temperature.",
      "C": "A float inside the condenser closes the valve whenever liquid collects at the bottom.",
      "D": "A sensing bulb on the suction line opens the valve more as the line warms."
    },
    "answer": "D",
    "explanation": "The bulb at the coil outlet senses temperature, and a warmer line raises bulb pressure and opens the valve to feed more refrigerant, which holds superheat steady. The fixed hole describes an orifice, which cannot adjust. A float in the condenser is not how a TXV works. A stepper motor valve is an electronic expansion valve, and it reads sensors rather than ignoring the suction line.",
    "id": 25
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A three-phase scroll compressor starts but makes unusual noise and pumps almost nothing, with suction and discharge pressures nearly equal. What is the most likely cause?",
    "options": {
      "A": "A low charge of refrigerant that has caused the evaporator to freeze solid.",
      "B": "A plugged filter drier that has blocked liquid flow to the metering device.",
      "C": "A dirty condenser coil that has pushed the head pressure far above normal.",
      "D": "Incorrect phase rotation, which runs the scroll backward and is fixed by swapping two leads."
    },
    "answer": "D",
    "explanation": "Scroll compressors pump in one direction only, and wrong phase order runs them backward with noise and nearly equal pressures. Swapping any two supply leads reverses the rotation. A low charge or plugged drier would not equalize pressures right at start, and a dirty condenser would raise the head pressure, which is the opposite of the symptom.",
    "id": 26
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "Why does the condenser of an air conditioner always reject more heat than the evaporator absorbs?",
    "options": {
      "A": "The condenser coil is always larger than the evaporator coil, so it collects extra heat.",
      "B": "The outdoor air carries extra heat into the condenser from the surrounding yard.",
      "C": "It must also reject the heat added to the refrigerant by compressor work.",
      "D": "The metering device adds heat when the liquid pressure falls rapidly."
    },
    "answer": "C",
    "explanation": "Energy is conserved, so the condenser rejects the evaporator heat plus the energy that the compressor adds. The coil size does not create heat, and in fact the size follows from the need. Outdoor air removes heat from the condenser and does not add it. The metering device lowers pressure without adding heat, since enthalpy stays about the same.",
    "id": 27
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A system delivers 36,000 BTU/hr of cooling and uses 3,000 watts of electrical power. What is its EER?",
    "options": {
      "A": "108, found by multiplying the cooling in BTU/hr by the power in kilowatts.",
      "B": "12, found by dividing cooling in BTU/hr by electrical power in watts.",
      "C": "3.5, found by dividing cooling in BTU/hr by electrical power in BTU/hr.",
      "D": "0.083, found by dividing the electrical power by the cooling output."
    },
    "answer": "B",
    "explanation": "EER is cooling output in BTU/hr divided by input in watts, so 36,000 divided by 3,000 is 12. Multiplying the two numbers gives a meaningless value. The value 3.5 is the COP, found with both quantities in the same units. The reciprocal value of 0.083 turns the ratio upside down.",
    "id": 28
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "What happens to a liquid refrigerant's temperature as it boils in the evaporator before all the liquid is gone?",
    "options": {
      "A": "It rises steadily, because the refrigerant absorbs sensible heat from the warm air.",
      "B": "It falls steadily, because the pressure drops as more liquid turns to vapor.",
      "C": "It stays nearly constant, because absorbed heat is latent heat changing its state.",
      "D": "It swings up and down, because the metering device pulses in time with the fan."
    },
    "answer": "C",
    "explanation": "During boiling at constant pressure, absorbed heat becomes latent heat and the temperature stays at the saturation value. It only rises once the last liquid is gone and the vapor becomes superheated. Pressure does not fall steadily along the coil in a way that cools the refrigerant, and the metering device does not pulse in time with the fan.",
    "id": 29
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "In a heat pump, which device changes the system from cooling mode to heating mode?",
    "options": {
      "A": "The reversing valve, which sends compressor discharge to the other coil.",
      "B": "The filter drier, which diverts liquid refrigerant into the opposite coil.",
      "C": "The accumulator, which stores liquid and releases it to the compressor on demand.",
      "D": "The run capacitor, which changes the direction the compressor motor rotates."
    },
    "answer": "A",
    "explanation": "The four-way reversing valve redirects the discharge and suction lines so the indoor and outdoor coils swap roles. A filter drier only removes moisture and debris. An accumulator protects the compressor from liquid and does not change the mode. A run capacitor helps the motor operate, and a heat pump does not reverse compressor rotation.",
    "id": 30
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "A refrigerant is named R-22. Using the rule of 90, how many hydrogen atoms does one molecule contain?",
    "options": {
      "A": "Two hydrogen atoms, taken from the last digit of the sum 112.",
      "B": "Two hydrogen atoms, taken from the first digit of the number 22.",
      "C": "None, because the number 22 has no digit that stands for hydrogen.",
      "D": "One hydrogen atom, taken from the middle digit of the sum 112."
    },
    "answer": "D",
    "explanation": "Adding 90 to 22 gives 112, whose digits show 1 carbon, 1 hydrogen and 2 fluorine atoms, with chlorine filling the last position, so R-22 is CHClF2. The last digit of 112 is the fluorine count, not hydrogen. The first digit of 22 is not used on its own. Hydrogen is present, and its count comes from the middle digit of the sum, not from a missing digit.",
    "id": 31
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "Which refrigerant class contains chlorine and hydrogen and is the type to which R-22 belongs?",
    "options": {
      "A": "CFC, which contains chlorine and fluorine but has no hydrogen.",
      "B": "HFC, which contains hydrogen and fluorine but has no chlorine at all.",
      "C": "HCFC, which contains hydrogen, chlorine, fluorine and carbon in each molecule.",
      "D": "HFO, which contains a carbon double bond and breaks down quickly in air."
    },
    "answer": "C",
    "explanation": "R-22 is CHClF2, which has hydrogen, chlorine and fluorine, so it is an HCFC. A CFC has no hydrogen, as in R-12. An HFC has no chlorine, as in R-134a. An HFO is defined by a carbon double bond and by a very short atmospheric life, and R-22 has neither of these features.",
    "id": 32
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "An R-410A system shows a suction pressure of 119 psig, which corresponds to 40 degrees on the chart, and a suction line temperature of 49 degrees. What is the superheat?",
    "options": {
      "A": "89 degrees, found by adding the saturation temperature to the line temperature.",
      "B": "40 degrees, found by reading the saturation temperature from the chart.",
      "C": "9 degrees, found by subtracting the saturation temperature from the line temperature.",
      "D": "49 degrees, found by reading the actual line temperature from the probe."
    },
    "answer": "C",
    "explanation": "Superheat equals the actual suction line temperature minus the saturation temperature at suction pressure, or 49 minus 40, which is 9 degrees. Adding the two readings does not measure how far the vapor has warmed past boiling. The saturation temperature alone is the boiling point of the refrigerant. The probe reading alone is the vapor temperature and does not show the amount of superheat.",
    "id": 33
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "A technician finds that 317 psig on an R-410A system corresponds to 100 degrees, and a liquid line reading of 90 degrees. What is the subcooling?",
    "options": {
      "A": "10 degrees, found by subtracting the line temperature from the saturation temperature.",
      "B": "190 degrees, found by adding the line temperature to the saturation temperature.",
      "C": "90 degrees, found by reading the line temperature directly from the probe.",
      "D": "317 degrees, found by reading the pressure directly as a temperature."
    },
    "answer": "A",
    "explanation": "Subcooling equals saturation temperature at the liquid pressure minus the actual liquid temperature, so 100 minus 90 is 10 degrees. Adding the readings is not a meaningful operation here. The probe reading alone gives no comparison to saturation. A pressure in psig is not a temperature in degrees, so it cannot be read directly as one.",
    "id": 34
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "Which statement about charging a zeotropic blend such as R-407C is correct?",
    "options": {
      "A": "Charge it as vapor from the top of the cylinder, so the oil is not diluted.",
      "B": "Charge it as liquid, because vapor leaving the cylinder changes the blend's composition.",
      "C": "Charge it as vapor, because liquid would overfill the compressor and damage the valves.",
      "D": "Charge it in either state, because the components always leave at the same rate."
    },
    "answer": "B",
    "explanation": "The components of a zeotropic blend boil at different rates, so drawing vapor takes mostly the lighter component and changes the mix left in the cylinder and in the system. Liquid withdrawal keeps the proportions right, and the liquid is metered so that it flashes to vapor before the compressor. The claim that components leave at the same rate describes an azeotrope.",
    "id": 35
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "Why does R-410A equipment use thicker tubing and higher-rated hoses than R-22 equipment?",
    "options": {
      "A": "R-410A has a much higher pressure at a given temperature than R-22 does.",
      "B": "R-410A is toxic at low concentrations and needs thick walls to contain leaks.",
      "C": "R-410A boils at a higher temperature at atmospheric pressure than R-22 does.",
      "D": "R-410A reacts with copper and needs extra wall thickness to survive corrosion."
    },
    "answer": "A",
    "explanation": "At 100 degrees, R-410A reaches about 317 psig and R-22 about 196 psig, so R-410A equipment must withstand roughly 60 percent more pressure. R-410A is classified as lower toxicity. It actually boils at a lower temperature, about minus 61 degrees, than R-22 at minus 41 degrees. It does not corrode copper, so the claim about copper reactions is wrong.",
    "id": 36
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "What does the safety class A2L describe?",
    "options": {
      "A": "Higher toxicity with no flame propagation, such as ammonia used in industrial plants.",
      "B": "Lower toxicity with high flammability, such as propane used in small appliances.",
      "C": "Lower toxicity with no flame propagation, such as R-134a used in refrigerators.",
      "D": "Lower toxicity with mild flammability and a slow burning velocity, such as R-32."
    },
    "answer": "D",
    "explanation": "A2L means lower toxicity (A) and lower flammability (2L), with a burning velocity below 10 centimeters per second. R-32 and R-454B are examples. Higher toxicity with no flame is not a class pairing used for ammonia, which is B2L. Lower toxicity with high flammability is class A3, as for propane. Lower toxicity with no flame propagation is class A1, as for R-134a.",
    "id": 37
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "A recovery cylinder that sat overnight at 70 degrees holds supposedly pure R-134a, but its pressure reads 95 psig. The chart shows 71 psig at 70 degrees. What is the most likely explanation?",
    "options": {
      "A": "The cylinder is nearly empty, so the vapor is thinner and the pressure is lower.",
      "B": "The cylinder holds a noncondensable gas such as air, which adds pressure.",
      "C": "The refrigerant has frozen to the walls of the cylinder, which raises the pressure.",
      "D": "The gauge needs a correction for sea level, which reduces every reading by 24."
    },
    "answer": "B",
    "explanation": "Pure refrigerant at steady temperature should read the chart value. A reading far above it points to air or another gas adding partial pressure, per Dalton's law. A nearly empty cylinder with liquid present still reads the chart value. Refrigerant does not freeze to the walls at 70 degrees. A fixed correction of 24 psi has no basis in gauge practice.",
    "id": 38
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "A technician uses the R-22 column to read a suction pressure of 119 psig on an R-410A system. What is the likely consequence?",
    "options": {
      "A": "The error gives a temperature about 30 degrees too warm and leads to a false diagnosis.",
      "B": "The error has no effect, since all refrigerants share the same pressure-temperature pairs.",
      "C": "The error gives a temperature about 30 degrees too cold and speeds up the repair.",
      "D": "The error is corrected automatically because the manifold gauge adjusts for each refrigerant."
    },
    "answer": "A",
    "explanation": "At 119 psig, R-410A boils at about 40 degrees, but the R-22 column gives roughly 70 degrees, which is about 30 degrees too warm and suggests the coil is almost as warm as the room. Each refrigerant has its own pressure-temperature pairs, so the claim of shared values is false. A too-cold result is the wrong direction. A mechanical gauge does not adjust itself, and you must pick the correct scale.",
    "id": 39
  },
  {
    "domain": "refrigerants",
    "chapter": 4,
    "question": "Which oil is the correct choice for a system charged with R-410A?",
    "options": {
      "A": "Mineral oil, since it is the standard lubricant for every refrigerant family.",
      "B": "Alkylbenzene oil, since it is the right match for all hydrofluorocarbon refrigerants.",
      "C": "Polyolester oil, since it mixes with hydrofluorocarbon refrigerants and returns to the compressor.",
      "D": "Any detergent motor oil, since the compressor housing keeps the oil sealed in."
    },
    "answer": "C",
    "explanation": "HFC refrigerants such as R-410A mix with polyolester (POE) oil, which carries back to the compressor. Mineral oil mixes with CFC and HCFC refrigerants and does not mix well with HFCs, so it stays behind in the coils. Alkylbenzene is used with HCFCs and some retrofits. Motor oil contains additives that contaminate a sealed system.",
    "id": 40
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "Which safety class describes a refrigerant that has lower toxicity and a burning velocity of 10 centimeters per second or less?",
    "options": {
      "A": "Class A1, because it shows no flame propagation at all in standard tests",
      "B": "Class B1, because it has higher toxicity and also shows no flame propagation",
      "C": "Class A2L, because it burns slowly and has lower toxicity",
      "D": "Class A3, because it is highly flammable and also has lower toxicity"
    },
    "answer": "C",
    "explanation": "Class A2L is defined by lower toxicity together with a burning velocity of 10 centimeters per second or less, so it fits the description. A1 fluids do not propagate a flame in the standard test, so they are not slow burning. B1 fluids carry higher toxicity, which contradicts the stem. A3 fluids such as propane burn rapidly and strongly, far above the 10 centimeter per second limit.",
    "id": 41
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "A room is 15 feet by 10 feet with an 8 foot ceiling, which is 34 cubic meters. A system holds 3.4 kg of R-32 with an LFL of 0.307 kg per cubic meter. What fraction of the LFL results from a full, evenly mixed release?",
    "options": {
      "A": "About 33 percent, since 0.10 divided by 0.307 gives that",
      "B": "About 10 percent, because the charge is divided by the room weight in pounds",
      "C": "About 3 percent, because refrigerant dilutes heavily when spread through a large room",
      "D": "About 100 percent, because the charge equals the LFL in kilograms"
    },
    "answer": "A",
    "explanation": "Dividing 3.4 kg by 34 cubic meters gives 0.10 kg per cubic meter, and 0.10 divided by 0.307 is about 0.33, or 33 percent of the LFL. Reporting 10 percent confuses the concentration itself with the fraction of the limit. Reporting 3 percent drops a factor of ten with no basis. Reporting 100 percent compares the mass of the charge with the limit without dividing by room volume.",
    "id": 42
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "Why are R-32 and R-454B described as heavier than air, and what does that mean for a leak indoors?",
    "options": {
      "A": "They are lighter than air, so leaked gas rises and collects at the ceiling",
      "B": "They mix evenly with room air, so concentration is equal at every height",
      "C": "Their vapors are heavier than air, so gas pools low and floor level matters",
      "D": "They condense into liquid on contact with air, so no vapor cloud forms"
    },
    "answer": "C",
    "explanation": "The molecular weights are about 52 for R-32 and above 60 for R-454B, compared with about 29 for air, so the vapors sink and collect near the floor. That is why sensors and ventilation focus on low points. The claim of rising gas has the direction reversed. The claim of even mixing ignores density differences, and the claim of condensation is false, since the vapors stay as gas at room temperature.",
    "id": 43
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "A technician must braze a joint on a system that was just opened. Which condition must be met before the torch is lit?",
    "options": {
      "A": "The refrigerant must be recovered and the line purged with nitrogen",
      "B": "The system pressure must be lowered to 5 psig so that any leak stays small",
      "C": "The torch must use a soft flame so that any leaked gas burns off safely",
      "D": "The cylinder must be moved indoors so it stays warm during the heating"
    },
    "answer": "A",
    "explanation": "Brazing must only be done after the refrigerant has been removed and the lines purged with nitrogen, because flammable gas and a torch flame is the combination the standard guards against. Leaving some pressure in the system and trying to burn off the leak invites a fire. A soft flame is still a flame. Moving a cylinder indoors to keep it warm raises its pressure and adds a hazard.",
    "id": 44
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "Which statement about leak detectors used with A2L refrigerants is correct?",
    "options": {
      "A": "Any detector made for R-22 works equally well and is always safe near flammable gas",
      "B": "Soap bubble solution cannot be used because it reacts with flammable refrigerants",
      "C": "A detector should be chosen that the maker states is suitable for A2L fluids",
      "D": "Detectors are unnecessary because A2L gas always has a strong smell"
    },
    "answer": "C",
    "explanation": "Detectors differ in the gases they sense and in whether their heated parts could become an ignition source, so the maker's statement about A2L suitability is the deciding fact. A detector made for R-22 might miss R-32 or be unsafe. Bubble solution does not react with refrigerants and remains a safe backup. A2L gases are nearly odorless, so smell cannot replace a detector.",
    "id": 45
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "A closet has a volume of 12 cubic meters. A system with 3.6 kg of R-454B (LFL 0.297 kg per cubic meter) is installed. Which statement is correct?",
    "options": {
      "A": "The release gives 0.30 kg per cubic meter, which exceeds the LFL, so mitigation is needed",
      "B": "The release gives 0.03 kg per cubic meter, far below the LFL, so nothing more is needed",
      "C": "The concentration cannot be found without knowing the outdoor temperature on that particular day",
      "D": "The release gives 0.43 kg per cubic meter, which proves the room is well within limits"
    },
    "answer": "A",
    "explanation": "Dividing 3.6 kg by 12 cubic meters gives 0.30 kg per cubic meter, which is just over the 0.297 LFL, so the charge exceeds what the room can hold and a sensor and blower response or a larger connected space is needed. The value of 0.03 is off by a factor of ten. Outdoor temperature does not change the arithmetic of mass over volume. The value of 0.43 comes from a wrong division and would exceed the limit anyway, not prove safety.",
    "id": 46
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "Which new rule from the AIM Act technology transitions most directly pushed makers toward R-32 and R-454B in new residential air conditioners?",
    "options": {
      "A": "A ban on all recovery of used R-410A starting in the year 2025 for any reason",
      "B": "A requirement that all home equipment use natural refrigerants such as ammonia only",
      "C": "A rule forbidding technicians from servicing any equipment that was installed before 2025",
      "D": "A GWP limit of 700 for new residential equipment built from January 2025"
    },
    "answer": "D",
    "explanation": "The technology transitions rule sets a GWP limit of 700 for new residential and light commercial air conditioning and heat pump equipment manufactured on or after January 1, 2025, and R-410A is far above that, so makers moved to lower GWP A2L fluids. Recovery of R-410A is still allowed and required. Ammonia is not used in homes. Existing equipment can still be serviced.",
    "id": 47
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "A technician finds that the leak sensor wire on a new A2L air handler is unplugged and the control board shows a fault. What is the correct action?",
    "options": {
      "A": "Remove the sensor entirely so the fault code clears and the system runs",
      "B": "Reconnect the sensor, confirm the fault clears, and test its response",
      "C": "Jumper the sensor terminals with a wire so the board believes the sensor is present",
      "D": "Ignore the fault because the sensor only matters if the system is overcharged"
    },
    "answer": "B",
    "explanation": "The sensor is a required safeguard, so the proper repair is to restore the connection and verify the board and blower respond as the installation manual describes. Removing it deletes the protection for the room. Jumpering the terminals fools the board and leaves a leak undetected. The sensor guards against any leak, not only overcharge, so ignoring the fault is wrong.",
    "id": 48
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "What is the lower flammability limit of a refrigerant?",
    "options": {
      "A": "The lowest temperature at which the liquid freezes inside a cylinder",
      "B": "The highest concentration in air at which a spark can ignite the gas",
      "C": "The lowest ambient temperature at which a system still starts and runs",
      "D": "The lowest concentration in air at which a flame can propagate"
    },
    "answer": "D",
    "explanation": "The lower flammability limit is the smallest gas concentration in air that can support a flame, below which the mixture is too lean to burn. The highest concentration describes the upper flammability limit, a different number. A freezing temperature in a cylinder concerns phase change, not fire. The lowest ambient temperature for a system start concerns operating limits, not flammability.",
    "id": 49
  },
  {
    "domain": "refrigerants",
    "chapter": 5,
    "question": "A service tech has a 4 lb charge of R-32 and a room of 960 cubic feet (27.2 cubic meters). The tech then installs a second 4 lb system in the same room. What happens to the full-release concentration if both leaked?",
    "options": {
      "A": "It stays at about 22 percent of the LFL because the room is the same",
      "B": "It drops to about 11 percent because two systems share the same room",
      "C": "It rises to about 44 percent of the LFL because the charge doubled",
      "D": "It rises to about 220 percent because each system adds a full LFL"
    },
    "answer": "C",
    "explanation": "One 4 lb charge gives about 22 percent of the LFL in that room, and with twice the mass in the same volume the concentration doubles to about 44 percent. Saying it stays the same ignores the added mass. Saying it drops reverses the effect of more refrigerant. Saying 220 percent multiplies by ten, which has no basis in the arithmetic.",
    "id": 50
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "Which certification is needed to service a factory-sealed household refrigerator holding 5 pounds or less of refrigerant?",
    "options": {
      "A": "Type II, because household refrigerators operate at high pressure with R-22",
      "B": "Type III, because small appliances use only low-pressure refrigerants like R-123",
      "C": "Core only, because the Core section alone covers every kind of appliance",
      "D": "Type I, because it covers factory-sealed small appliances"
    },
    "answer": "D",
    "explanation": "Type I is the certification written for factory-sealed small appliances holding 5 pounds or less, which fits a household refrigerator. Type II applies to high-pressure systems that are not small appliances. Type III applies to low-pressure systems like centrifugal chillers. Passing only the Core section does not authorize work on any appliance, since a type section must be passed as well.",
    "id": 51
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "A technician vents the remaining vapor from a hose after recovery, a small amount that cannot be captured by the equipment. Which rule applies?",
    "options": {
      "A": "It is allowed only as a minimal release during a good faith recovery attempt",
      "B": "It is always a violation, regardless of how small the release was or why",
      "C": "It is allowed when the technician is certified and the refrigerant is an HFC type",
      "D": "It is allowed whenever the system holds less than 5 pounds of refrigerant"
    },
    "answer": "A",
    "explanation": "Rules recognize that tiny amounts remain in hoses and fittings when you disconnect, so a minimal release during a good faith attempt to recover is allowed. Saying every release is a violation ignores that exception. Certification alone does not permit venting. The size of the system does not create a venting allowance either.",
    "id": 52
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "A refrigerant is recovered from a customer's air conditioner, cleaned on site by passing it through filter driers, and put back in the same customer's system. What was this process?",
    "options": {
      "A": "Reclaiming, because the refrigerant was brought back to full new product purity",
      "B": "Recycling, because it was cleaned for reuse in equipment of the same owner",
      "C": "Venting, because it was moved out of the sealed system for some time",
      "D": "Recovering only, because no cleaning step is part of the definition"
    },
    "answer": "B",
    "explanation": "Recycling means cleaning refrigerant for reuse, usually by separating oil and filtering moisture and particles, and the same owner may reuse it. Reclaiming requires a certified reclaimer and chemical analysis to the AHRI 700 purity standard. Venting would mean releasing the gas to the atmosphere. Recovery alone is removal into a container without any cleaning.",
    "id": 53
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "A comfort cooling system holds 80 pounds of refrigerant. A technician added 8 pounds, and the last addition was 146 days ago. What is the annualized leak rate?",
    "options": {
      "A": "About 10 percent, since 8 divided by 80 equals one tenth exactly",
      "B": "About 25 percent, since 8 over 80 is scaled by 365 over 146",
      "C": "About 36 percent, since the added pounds are simply divided by days",
      "D": "About 2.5 percent, since the scaling factor is 146 over 365"
    },
    "answer": "B",
    "explanation": "The fraction added is 8 divided by 80, which is 0.10, and the year scaling factor is 365 divided by 146, which is 2.5, so the rate is 0.10 times 2.5 times 100, or 25 percent. Stopping at 10 percent forgets to scale to a year. Dividing pounds by days is not part of the formula. Using 146 over 365 inverts the scaling factor and understates the rate.",
    "id": 54
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "What is the main reason a disposable refrigerant cylinder may never be refilled?",
    "options": {
      "A": "It is a light single-use steel cylinder not built for repeated cycles",
      "B": "It cannot hold more than 10 pounds of refrigerant at any working pressure",
      "C": "It is made from aluminum, which reacts with every HFC refrigerant sold",
      "D": "It has no valve at all, so refrigerant could not be added or removed"
    },
    "answer": "A",
    "explanation": "Disposable cylinders are light steel built for a single use, and they are not tested or built for the stress of refilling, so refilling them is prohibited. Their capacity can be larger than 10 pounds. They are steel and not aluminum, and refrigerants do not attack steel in this way. They do have a valve, which is how the contents are drawn out.",
    "id": 55
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "Which boiling point range places a refrigerant in the low-pressure class used for Type III appliances?",
    "options": {
      "A": "Below minus 50 degrees C at normal atmospheric pressure",
      "B": "Between minus 50 degrees C and 10 degrees C at normal atmospheric pressure",
      "C": "Above 10 degrees C at normal atmospheric pressure",
      "D": "Exactly equal to the temperature at which pure water boils"
    },
    "answer": "C",
    "explanation": "A refrigerant with a normal boiling point above 10 degrees C, such as R-123 at about 28 degrees C, is a low-pressure refrigerant and runs below atmospheric pressure in the evaporator. A boiling point below minus 50 degrees C describes very high pressure. A range between minus 50 and 10 degrees C describes high-pressure fluids like R-22. The boiling point of water is not a classification line.",
    "id": 56
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "Which statement about Section 608 certification is correct?",
    "options": {
      "A": "It must be renewed every five years with a new written examination",
      "B": "It is valid in a single state and must be repeated when moving",
      "C": "It is valid only for the employer that paid for the test",
      "D": "It does not expire, though employers and states may add requirements"
    },
    "answer": "D",
    "explanation": "Federal Section 608 certification has no expiration date, so it stays valid for life, though a state or employer may require its own training or license. A five-year renewal exam does not exist federally. The certificate is not limited to one state. It belongs to the technician, not the employer.",
    "id": 57
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "A technician has 40 pounds of recovered R-410A that has been mixed with some R-22 by mistake. What must be done with it?",
    "options": {
      "A": "Recycle it on site and charge it into the next customer's system tomorrow",
      "B": "Vent the R-22 portion only, because it is the less valuable fluid here",
      "C": "Send it to a facility that can reclaim or destroy it",
      "D": "Add it to a cylinder of new R-410A to dilute the contaminated mixture"
    },
    "answer": "C",
    "explanation": "Mixed refrigerant cannot be returned to use by ordinary on site recycling, so it must go to a facility that reclaims or destroys it. Charging it into another customer's system could damage equipment, because the pressures and oil needs differ. Venting any part of it is illegal. Adding it to new refrigerant contaminates the clean cylinder and wastes it.",
    "id": 58
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "A commercial refrigeration system with a 150 pound charge needed 15 pounds added after 73 days. Using the annualized formula, which statement is correct?",
    "options": {
      "A": "The rate is 50 percent, which is above the 20 percent commercial trigger",
      "B": "The rate is 10 percent, which is below the 20 percent commercial trigger",
      "C": "The rate is 20 percent, which exactly equals the trigger and requires no repair",
      "D": "The rate is 5 percent, which is below the comfort cooling trigger"
    },
    "answer": "A",
    "explanation": "The fraction added is 15 divided by 150, or 0.10, and the scale factor is 365 divided by 73, or 5, so the rate is 0.10 times 5 times 100, which is 50 percent and well above the 20 percent commercial trigger. Reporting 10 percent forgets the yearly scaling. Reporting 20 percent has no arithmetic basis here. Reporting 5 percent divides in the wrong direction.",
    "id": 59
  },
  {
    "domain": "regulations",
    "chapter": 6,
    "question": "A supplier asks a buyer for proof of certification before selling a 25 pound cylinder of R-410A. Why?",
    "options": {
      "A": "Sales of most refrigerants are legally restricted to certified technicians",
      "B": "The supplier is required to test the buyer on refrigerant safety rules",
      "C": "R-410A may only be sold in cylinders holding ten pounds or less",
      "D": "The cylinder deposit is refunded only to technicians who hold certification"
    },
    "answer": "A",
    "explanation": "Federal sales restrictions limit purchase of ozone-depleting refrigerants and most substitutes, including HFCs like R-410A, to certified technicians, so suppliers keep proof on file. Suppliers do not give tests. Larger cylinders of R-410A are sold routinely. Deposit refunds are a business matter that has nothing to do with the sales rule.",
    "id": 60
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "Which filler metal should be used to braze copper tubing to a steel service valve?",
    "options": {
      "A": "A copper-phosphorus rod such as BCuP-5, used without any flux at all",
      "B": "A silver-bearing rod such as BAg-5, used together with a suitable flux",
      "C": "A soft tin-lead solder, because steel requires a lower melting filler",
      "D": "A mild steel welding rod, because the valve body is made of steel"
    },
    "answer": "B",
    "explanation": "A silver-bearing rod with flux bonds copper to steel and other ferrous metals, which is why it is used at valves with steel ends. Copper-phosphorus rod forms brittle phosphides with iron and cracks. Soft solder melts below 840 degrees F and is too weak for refrigerant pressure and vibration. A steel welding rod would melt the thin copper tube before it flows.",
    "id": 61
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "What is the main reason for flowing nitrogen through a tube while brazing it?",
    "options": {
      "A": "It cools the joint so the filler metal can freeze more quickly",
      "B": "It pushes the molten filler metal deeper into the joint",
      "C": "It prevents copper oxide scale from forming inside the tube",
      "D": "It raises the system pressure so leaks show up right away"
    },
    "answer": "C",
    "explanation": "Nitrogen displaces air, so oxygen is not present to react with hot copper, which stops black scale from forming and later plugging the metering device or filter drier. Cooling is not its job, and fast cooling can crack a joint. The filler is drawn in by capillary action, not by gas pressure. Brazing is done at very low nitrogen pressure and is not a pressure test.",
    "id": 62
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "An ACR tube is labeled 5/8 inch. What does that size measure?",
    "options": {
      "A": "The actual outside diameter of the tube, 5/8 inch",
      "B": "The inside diameter of the tube, 5/8 inch",
      "C": "The nominal size, which gives an outside diameter of 3/4 inch",
      "D": "The wall thickness of the tube, 5/8 inch"
    },
    "answer": "A",
    "explanation": "ACR tubing is sized by its actual outside diameter, so a 5/8 inch tube measures 5/8 inch across the outside. Inside diameter is not the basis for ACR sizing. Nominal sizing with a larger outside diameter applies to plumbing Type K, L and M tube. Wall thickness is a separate property, and a 5/8 inch wall would be thicker than the tube itself.",
    "id": 63
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "A nitrogen test is started at 200 psig at 80 degrees F. Later the temperature is 60 degrees F. About what gauge pressure would a tight system show?",
    "options": {
      "A": "About 200 psig, because a tight system never changes its pressure at all",
      "B": "About 150 psig, because the pressure drops about one psi per degree",
      "C": "About 214 psig, because cooler gas is compressed and its pressure rises",
      "D": "About 192 psig, because absolute pressure falls with absolute temperature"
    },
    "answer": "D",
    "explanation": "Working in absolute terms, P1 = 214.7 psia at 540 R, and at 520 R the pressure is 214.7 x 520/540 = 206.7 psia, which is 192 psig. That matches the choice of about 192 psig, and using absolute values is what separates it from the wrong answers. Staying at 200 psig ignores the temperature effect. Dropping one psi per degree overstates the drop badly. Cooler gas does not gain pressure.",
    "id": 64
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "Which statement about oil return in a suction line is correct?",
    "options": {
      "A": "Oil returns best when the line is oversized so the gas moves slowly past it",
      "B": "Oil returns because it is heavier than refrigerant and simply flows downhill",
      "C": "Oil is carried back by the moving gas, so speed must stay adequate",
      "D": "Oil never leaves the compressor in a properly built and charged system"
    },
    "answer": "C",
    "explanation": "Oil that leaves the compressor travels with the refrigerant and returns on the gas stream, so the gas speed in horizontal runs and risers must be high enough to carry it, roughly 500 and 1,000 feet per minute as design guides. An oversized line slows the gas and lets oil settle. Oil does not rely on gravity to return. Some oil always leaves the compressor.",
    "id": 65
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "A 60 foot straight copper line is heated from 50 degrees F to 150 degrees F. Using 0.0000094 inch per inch per degree F, about how much does it grow?",
    "options": {
      "A": "About 0.68 inch, from 720 inches x 100 degrees x 0.0000094",
      "B": "About 6.8 inches, from 60 feet x 100 degrees x 0.0000094",
      "C": "About 0.07 inch, from 60 inches x 100 degrees x 0.0000094",
      "D": "About 1.4 inches, from 720 inches x 200 degrees x 0.0000094"
    },
    "answer": "A",
    "explanation": "The length is 60 x 12 = 720 inches and the change is 100 degrees, so 720 x 100 x 0.0000094 = 0.68 inch. Using feet instead of inches gives a number off by twelve. Using 60 inches instead of 720 understates the length. Using a 200 degree change overstates the temperature rise, since the line goes from 50 to 150.",
    "id": 66
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "A technician sees black flakes inside a TXV screen on a system that was recently repaired. What is the most likely cause?",
    "options": {
      "A": "Brazing was done without a nitrogen purge, forming copper oxide scale",
      "B": "The refrigerant charge was too high, which breaks down the copper",
      "C": "The filter drier was installed with the arrow pointing the wrong way",
      "D": "The compressor was run without oil, which makes carbon flakes"
    },
    "answer": "A",
    "explanation": "Black flakes are the sign of copper oxide scale that forms when copper is heated in air, and it flakes off and lodges in a narrow screen. A high charge does not make scale. A reversed drier restricts flow but does not create flakes. A compressor with no oil would fail with other signs, not flakes of scale in a metering device screen.",
    "id": 67
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "Why should flux be kept off the inside of the tube?",
    "options": {
      "A": "Flux makes the filler metal melt at far too low a temperature to hold",
      "B": "Flux inside the system can contaminate it and plug small passages",
      "C": "Flux conducts electricity and can short out the compressor windings",
      "D": "Flux is toxic to refrigerant and makes it lose cooling ability"
    },
    "answer": "B",
    "explanation": "Flux residue inside a sealed system is a contaminant that can corrode parts and plug a metering device or filter, so flux belongs on the outside of the male tube only. Flux does not lower the melting point of the filler in a harmful way. A paste residue is not what shorts windings. Flux does not change the refrigerant's cooling ability directly.",
    "id": 68
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "What is the purpose of a heat-blocking wet rag or paste during brazing?",
    "options": {
      "A": "It cools the filler metal so that it freezes much faster",
      "B": "It protects valve seals and heat-sensitive parts near the joint",
      "C": "It cleans oxide from the copper in place of flux",
      "D": "It adds moisture to the joint so the filler flows more freely"
    },
    "answer": "B",
    "explanation": "Parts such as service valves, TXV bodies, and filter driers contain seals and internals that can be damaged by brazing heat, so a wet rag or paste keeps them cooler. Rapid cooling of the filler would hurt the joint. The rag does not clean oxides. Moisture on the joint would interfere with the braze and boil off as steam.",
    "id": 69
  },
  {
    "domain": "piping",
    "chapter": 7,
    "question": "A brazed joint is cool and shows a smooth, continuous fillet of filler all around, with filler on both the tube and the fitting. What does this indicate?",
    "options": {
      "A": "A good braze, since the filler flowed all around the joint",
      "B": "A bad braze, since a visible bead means too much filler was used",
      "C": "A cold joint, since it needs to be reheated and wiped",
      "D": "An incomplete braze, since fillets only form on one side"
    },
    "answer": "A",
    "explanation": "A smooth continuous fillet on both pieces shows the filler was drawn into the joint by capillary action and wetted both surfaces, which is what a good braze looks like. A bead alone is not the problem; gaps and pits are. A cold joint looks dull, lumpy and unflowed. Fillets form around the entire joint, not only one side.",
    "id": 70
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "A technician reaches 450 microns, isolates the pump, and the gauge climbs steadily to 3,000 microns without leveling off. What does this indicate?",
    "options": {
      "A": "The system is dry and tight, so charging can begin",
      "B": "The system contains moisture that is slowly boiling off",
      "C": "The pump oil is clean, so the pump should be restarted",
      "D": "The system has a leak that lets outside air enter"
    },
    "answer": "D",
    "explanation": "A steady rise that never levels off means air is leaking in, so the leak must be found and repaired before evacuation continues. A dry, tight system would hold the vacuum. Moisture produces a rise that levels off at a limit, not a continuing climb. Clean pump oil has nothing to do with a decay test taken with the pump isolated.",
    "id": 71
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "Why must a micron gauge be used instead of the compound gauge on a manifold to judge evacuation?",
    "options": {
      "A": "The compound gauge cannot read inches of mercury",
      "B": "The compound gauge has no resolution near deep vacuum levels",
      "C": "The micron gauge measures system pressure in psig",
      "D": "The micron gauge corrects for the temperature of the pump oil"
    },
    "answer": "B",
    "explanation": "A manifold compound gauge has such coarse resolution near zero absolute pressure that 29 and 29.9 inches of mercury look nearly the same, though they differ by a factor of about 45 in pressure, so it cannot show dryness. It does read inches of mercury. The micron gauge reads absolute pressure in microns, not psig. It does not correct for pump oil temperature.",
    "id": 72
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "Water in a system at 70 degrees F boils at about 18,800 microns. What does this mean for an evacuation that reaches 500 microns?",
    "options": {
      "A": "The vacuum is far below the boiling point, so water boils off",
      "B": "The vacuum is too low to be reached by a standard pump",
      "C": "The vacuum is above the boiling point, so the moisture will stay liquid",
      "D": "The vacuum has no connection to the water in the system"
    },
    "answer": "A",
    "explanation": "At 500 microns the pressure is far below 18,800 microns, so water at 70 degrees F boils vigorously into vapor that the pump removes. Standard two-stage pumps can reach this level. Saying moisture stays liquid reverses the relationship. Moisture removal depends directly on the vacuum level.",
    "id": 73
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "A system has a factory charge of 6 lb 8 oz good for 15 feet. It has a 35 foot line set, and the maker says add 0.6 ounce per foot beyond 15 feet. What total should be weighed in?",
    "options": {
      "A": "6 lb 8 oz, because the nameplate charge applies to every line length",
      "B": "7 lb 4 oz, because 12 extra ounces are added to the nameplate",
      "C": "8 lb 4 oz, because the extra line length is added in pounds not ounces",
      "D": "7 lb 10 oz, because the extra 18 ounces is added for 30 feet"
    },
    "answer": "B",
    "explanation": "Extra length is 35 minus 15 = 20 feet, times 0.6 = 12 ounces, and the factory charge is 6 x 16 + 8 = 104 ounces, so the total is 116 ounces, which is 7 lb 4 oz. The nameplate amount alone ignores the extra line. Adding pounds instead of ounces overstates it. The choice with 18 ounces uses 30 feet of extra line, which is wrong.",
    "id": 74
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "Why should R-410A be charged as a liquid and not as a vapor from the cylinder?",
    "options": {
      "A": "Vapor charging is illegal for all refrigerants under Section 608 rules",
      "B": "Liquid refrigerant cools the compressor motor during the charging",
      "C": "A blend can change composition when only vapor is withdrawn",
      "D": "Vapor cannot enter any system that is already at operating pressure"
    },
    "answer": "C",
    "explanation": "A blend contains components that boil at different temperatures, so withdrawing vapor takes more of the lighter component and shifts the mix left in the cylinder, which alters performance. Section 608 does not ban vapor charging. Liquid entering a running compressor can harm it, not cool it. Vapor can enter a system if the cylinder pressure is higher than system pressure.",
    "id": 75
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "A fixed orifice system is being charged on a hot day. Which method is the best choice?",
    "options": {
      "A": "Subcooling, because the orifice sets the liquid level in the condenser",
      "B": "Weighing in only, because temperature measurements are unreliable on hot days",
      "C": "Compressor amp draw, because it always rises directly with the charge",
      "D": "Superheat, using the manufacturer's chart for wet bulb and outdoor air"
    },
    "answer": "D",
    "explanation": "A fixed orifice does not adjust to changing conditions, so the standard field method is superheat read against the maker's chart for indoor wet bulb and outdoor dry bulb. Subcooling is the method for TXV systems. Weighing in is excellent when the system is empty but is not the only method. Amp draw is affected by many things besides charge and cannot set it.",
    "id": 76
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "A TXV system shows suction pressure 68.5 psig and suction line temperature 52 degrees F. R-22 saturation at 68.5 psig is 40 degrees F. What is the superheat?",
    "options": {
      "A": "12 degrees F, found by subtracting 40 from 52",
      "B": "8 degrees F, found by subtracting 52 from 60",
      "C": "92 degrees F, found by adding 40 and 52",
      "D": "28 degrees F, found by subtracting 24 from 52"
    },
    "answer": "A",
    "explanation": "Superheat is the suction line temperature minus the saturation temperature at suction pressure, so 52 minus 40 equals 12 degrees F. The other methods use made-up numbers or add the two values together, which has no physical meaning. Superheat is always a difference between the actual vapor temperature and the boiling temperature at that pressure.",
    "id": 77
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "Why should the micron gauge be placed at the opposite end of the system from the pump?",
    "options": {
      "A": "It reads pressure in the system, not pressure near the pump",
      "B": "It keeps pump oil from ever entering the gauge sensor element",
      "C": "It increases the pump speed by reducing the back pressure",
      "D": "It is required by the Section 608 evacuation rules for gauges"
    },
    "answer": "A",
    "explanation": "Pressure near the pump is lower than the pressure at the far end of the circuit while the pump runs, so a gauge at the pump can read low while the system is still wet. Oil protection is handled by a valve and by clean oil. Gauge placement does not change the pump speed. Section 608 does not specify gauge location.",
    "id": 78
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "What is the safest and most reliable way to find a very small refrigerant leak in a coil?",
    "options": {
      "A": "Hold a lit flame near the coil and watch for a color change",
      "B": "Pressurize with oxygen and listen for a hiss at the coil joint",
      "C": "Pressurize with compressed air and apply no leak solution at all",
      "D": "Pressurize with forming gas, then use a hydrogen sensor"
    },
    "answer": "D",
    "explanation": "A 95 percent nitrogen and 5 percent hydrogen mixture is non-flammable by safety standards, and hydrogen escapes through tiny leaks that a sensor can detect, which makes it a good choice for coils. A flame does not work on HFC refrigerants and creates toxic gas. Oxygen is dangerous with oil and must never be used. Compressed air carries moisture and oxygen into the system.",
    "id": 79
  },
  {
    "domain": "service_procedures",
    "chapter": 8,
    "question": "After isolating the pump, the micron gauge rises from 400 to 700 microns over 5 minutes and then holds at 700. What does this suggest?",
    "options": {
      "A": "A major leak, because any rise means air is entering",
      "B": "A failed micron gauge, because the reading should not change",
      "C": "A completed evacuation, because 700 is below the water boiling point",
      "D": "Moisture or oil still outgassing, so continue pumping and retest"
    },
    "answer": "D",
    "explanation": "A rise that levels off points to moisture or oil vapor still coming out of the system, so more pumping is needed before the test is repeated. A leak gives a continuous climb. The gauge is doing its job when it shows a rise. Being below the boiling point of water does not make the system dry, because the rise shows vapor remains.",
    "id": 80
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A technician removes refrigerant from a system and stores it in an external cylinder without cleaning, testing or processing it in any way. Which term describes this?",
    "options": {
      "A": "Reclaiming the refrigerant at the job site using portable test equipment",
      "B": "Recycling the refrigerant through a series of filter-driers on the job site",
      "C": "Recovering the refrigerant into an external container with no processing at all",
      "D": "Reprocessing the refrigerant until it meets the AHRI 700 purity standard"
    },
    "answer": "C",
    "explanation": "Recovery is defined as removing refrigerant and storing it in an external container without testing or processing it, which is what the technician did. Reclaiming means reprocessing to AHRI 700 purity and verifying it by laboratory analysis, which cannot be done at a job site. Recycling means cleaning the refrigerant by passing it through filter-driers and separating oil, and this technician did no cleaning. Reprocessing to the new-product standard is the definition of reclaiming, not of recovery.",
    "id": 81
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A recovery cylinder is marked with a rated capacity of 50 pounds and has a tare weight of 19.0 pounds. What is the highest gross weight the scale should show when filling it?",
    "options": {
      "A": "59.0 pounds, because the net refrigerant is limited to 40 pounds",
      "B": "69.0 pounds, because the net refrigerant may reach the full rated capacity",
      "C": "49.0 pounds, because the net refrigerant is limited to 30 pounds",
      "D": "64.0 pounds, because the net refrigerant is limited to 45 pounds"
    },
    "answer": "A",
    "explanation": "The fill limit is 80 percent of rated capacity, so 0.80 x 50 = 40 pounds of refrigerant, and adding the 19.0 pound tare gives a gross weight of 59.0 pounds. Filling to the full rated capacity would give 69.0 pounds gross and leave no vapor space for liquid expansion. A limit of 30 pounds net would be 60 percent, which is not the rule. A limit of 45 pounds net would be 90 percent, which also leaves too little safety margin.",
    "id": 82
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A technician must recover refrigerant from an appliance and finds that the system holds liquid refrigerant in a large receiver. Which approach recovers the most refrigerant in the shortest time?",
    "options": {
      "A": "Recover vapor only at a low rate so the compressor does not overheat during the job",
      "B": "Pour the liquid into a bucket and carry it out to the cylinder",
      "C": "Connect the cylinder directly to the discharge line and open the valves",
      "D": "Recover the liquid first with a machine rated for liquid, then finish with vapor"
    },
    "answer": "D",
    "explanation": "Liquid carries far more mass than vapor, so removing liquid first with a machine rated for liquid, followed by a vapor pass to the required level, is the fastest method. Recovering only vapor works but can take several times longer on a large charge. Pouring refrigerant into an open container vents it to the atmosphere, which is illegal. Connecting a cylinder directly to a pressurized line with no machine or weight control invites overfilling and unsafe pressures.",
    "id": 83
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "After a technician recovers an R-22 system down to 0 psig and closes the valves, the gauge climbs to 11 psig after five minutes. What does this rise indicate?",
    "options": {
      "A": "The recovery cylinder has been filled past its safe 80 percent limit",
      "B": "Refrigerant dissolved in the oil is boiling out, so recovery must continue",
      "C": "The gauge is faulty because a closed system holds a constant pressure",
      "D": "Air has leaked into the system through the service ports during the wait"
    },
    "answer": "B",
    "explanation": "Oil holds dissolved refrigerant, and when pressure is lowered that refrigerant boils off and raises the gauge, so more recovery passes are needed. A cylinder filled past its limit would not push pressure back into a closed system with the valves shut. A closed system does not hold a constant pressure if liquid remains to vaporize, so blaming the gauge is wrong. Air entering would not be expected from closed service ports, and the rise is the known rebound effect.",
    "id": 84
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "Which statement correctly describes the rule for sending reused refrigerant to a different owner?",
    "options": {
      "A": "Recycled refrigerant may be sold directly to any new owner at a discount",
      "B": "Recovered refrigerant may be sold to a new owner if it passes a field acid test",
      "C": "Refrigerant sold to a new owner must first be reclaimed to AHRI 700 purity",
      "D": "Mixed refrigerant may be sold to a new owner if labeled as a blend"
    },
    "answer": "C",
    "explanation": "When ownership changes, the refrigerant must be reclaimed to the AHRI 700 standard at a certified reclaimer, which verifies purity by laboratory analysis. Recycled refrigerant may be reused only within equipment owned by the same person, not sold on. A field acid test does not prove the purity needed for sale to a new owner. A mixture of refrigerants has no use in the field, and labeling it as a blend does not make it legal to sell.",
    "id": 85
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A low-pressure chiller must be pulled down to the required recovery level before it is opened. What is that level for a low-pressure appliance?",
    "options": {
      "A": "25 mm Hg absolute, which is the same as 25,000 microns",
      "B": "10 inches of mercury vacuum, which is about 506 mm Hg absolute",
      "C": "0 psig, which is atmospheric pressure at sea level in the shell",
      "D": "500 microns, which is the same as a full deep evacuation"
    },
    "answer": "A",
    "explanation": "The recovery level for a low-pressure appliance is 25 mm Hg absolute, and since 1 mm Hg equals 1,000 microns, that is 25,000 microns. A level of 10 inches of mercury vacuum is a requirement for certain high-pressure appliances, not for chillers. Stopping at 0 psig would leave the shell at atmospheric pressure and a lot of refrigerant behind. A level of 500 microns is the target of a deep evacuation before charging, a different procedure from recovery.",
    "id": 86
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A 16-pound system has about 13.6 pounds as liquid. A machine recovers liquid at 3.4 pounds per minute and vapor at 0.4 pounds per minute. About how long does the whole recovery take, excluding rebound checks?",
    "options": {
      "A": "4 minutes, because the liquid and vapor are removed at the same time",
      "B": "40 minutes, because all of the charge must be removed as vapor",
      "C": "14 minutes, because the two rates are added and divided by the charge",
      "D": "10 minutes, with 4 minutes for liquid and 6 minutes for vapor"
    },
    "answer": "D",
    "explanation": "Liquid takes 13.6 / 3.4 = 4 minutes, the remaining 2.4 pounds of vapor takes 2.4 / 0.4 = 6 minutes, and the total is 10 minutes. Four minutes counts only the liquid phase and ignores the vapor remaining. Forty minutes is what vapor-only recovery of all 16 pounds would take, which ignores the faster liquid step. Fourteen minutes comes from adding rates and dividing, which is not a valid way to combine separate stages.",
    "id": 87
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "Why must water continue to flow through the tubes of a low-pressure chiller while refrigerant is being recovered from the shell?",
    "options": {
      "A": "To keep the compressor oil from foaming while the shell is under vacuum",
      "B": "To stop boiling refrigerant from freezing the tube water and bursting the tubes",
      "C": "To raise the shell pressure above the rupture disc setting before recovery begins",
      "D": "To flush the tubes so that scale does not contaminate the recovered refrigerant"
    },
    "answer": "B",
    "explanation": "Refrigerant that boils quickly in a low-pressure shell absorbs heat from the water and can freeze it, and expanding ice splits the tubes. Foaming of oil is not the reason water flow matters here. Raising shell pressure to the rupture disc setting would trigger the disc and release the charge, the opposite of what is wanted. Flushing scale is a maintenance job, and water moving in the tubes does not clean the refrigerant.",
    "id": 88
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A technician has a refrigerant cylinder that stored recovered refrigerant overnight at 70 degrees F. Its pressure is noticeably higher than the pressure-temperature chart value for that refrigerant. What does this suggest?",
    "options": {
      "A": "The cylinder contains too little refrigerant to show the chart pressure",
      "B": "The refrigerant has been reclaimed and now meets the AHRI 700 standard",
      "C": "Noncondensable gases such as air are present, so the cylinder needs reclaiming",
      "D": "The cylinder is cold and its contents have lost some of their heat"
    },
    "answer": "C",
    "explanation": "Pressure above the chart value for the cylinder temperature indicates noncondensable gas, usually air, mixed in with the refrigerant, and the cylinder should go to a reclaimer. A cylinder holding little refrigerant would still show saturation pressure if any liquid is present. Reclaimed refrigerant would be tested and clean, and would match the chart. A cold cylinder shows a lower pressure than the chart value, not a higher one.",
    "id": 89
  },
  {
    "domain": "service_procedures",
    "chapter": 9,
    "question": "A technician services a household refrigerator with a working compressor and a small factory charge. The recovery equipment must remove what share of the charge, or reach what vacuum?",
    "options": {
      "A": "90 percent of the refrigerant, or a 4 inch mercury vacuum",
      "B": "50 percent of the refrigerant, or a 10 inch mercury vacuum",
      "C": "100 percent of the refrigerant, or a 25 mm mercury absolute level",
      "D": "80 percent of the refrigerant, or a 15 inch mercury vacuum"
    },
    "answer": "A",
    "explanation": "For a small appliance with a working compressor, the equipment must recover 90 percent of the charge, or pull a 4 inch mercury vacuum, and the figure falls to 80 percent if the appliance compressor does not work. Fifty percent with a 10 inch vacuum matches no small-appliance rule. A level of 25 mm mercury absolute is the low-pressure chiller requirement, and 100 percent is not the standard. Eighty percent applies only when the compressor is inoperative, and 15 inches applies to large high-pressure appliances.",
    "id": 90
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "What are the two main jobs of the compressor in a vapor-compression refrigeration cycle?",
    "options": {
      "A": "Remove heat from the room and reject that heat to the outdoors",
      "B": "Meter refrigerant to the evaporator and control the superheat setting",
      "C": "Filter dirt from the refrigerant and remove moisture from the oil",
      "D": "Move refrigerant around the circuit and raise its pressure and temperature"
    },
    "answer": "D",
    "explanation": "The compressor circulates vapor and raises its pressure, which also raises its temperature so that heat can be rejected to warmer outdoor air. Removing heat from the room is the job of the evaporator, and rejecting it is the job of the condenser. Metering the refrigerant and setting superheat is done by the metering device. Filtering dirt and removing moisture is the work of the filter-drier, not the compressor.",
    "id": 91
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "An R-22 system shows 68 psig on the suction gauge and 250 psig on the discharge gauge. What is the approximate compression ratio?",
    "options": {
      "A": "About 3.2 to 1, found by dividing absolute discharge pressure by absolute suction pressure",
      "B": "About 3.7 to 1, found by dividing the gauge discharge pressure by the gauge suction pressure",
      "C": "About 3.0 to 1, found by adding atmospheric pressure to only the suction reading",
      "D": "About 4.7 to 1, found by dividing the discharge reading by suction minus atmospheric pressure"
    },
    "answer": "A",
    "explanation": "The ratio uses absolute pressure, so it is (250 + 14.7) / (68 + 14.7) = 264.7 / 82.7, which is about 3.2 to 1. A value of 3.7 comes from dividing 250 by 68, which wrongly uses gauge pressures. A value of 3.0 results from adding 14.7 to only the suction reading. A value of 4.7 results from subtracting atmospheric pressure from the suction reading, which is the wrong direction.",
    "id": 92
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "A three-phase scroll compressor runs after installation, but the suction pressure does not fall, the discharge pressure does not rise, and the amp draw is low. What is the likely cause?",
    "options": {
      "A": "The motor rotates backward, so any two power leads must be swapped",
      "B": "The compressor oil is overfilled, so some oil must be drained out",
      "C": "The start capacitor has failed and must be replaced with a new one",
      "D": "The crankcase heater is open and the oil has foamed from refrigerant"
    },
    "answer": "A",
    "explanation": "A three-phase scroll turning backward runs noisily but cannot pump, and swapping any two power leads reverses it. Overfilled oil would cause hydraulic knocking or high amps, not a loss of pumping. A start capacitor is not used on most three-phase motors, and a failed one would cause a hard start rather than a quiet no-pump run. A dead crankcase heater could cause oil foaming at startup, but it would not cause this specific pressure pattern.",
    "id": 93
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "A compressor has an RLA of 18.0 amps. A clamp meter reads 21.6 amps while it is running. What percent of RLA is the compressor drawing?",
    "options": {
      "A": "83 percent, which is lower than normal and suggests a weak compressor",
      "B": "120 percent, which is high enough to need investigation of the cause",
      "C": "150 percent, which means the compressor is certainly locked",
      "D": "105 percent, which is within the normal operating range for the unit"
    },
    "answer": "B",
    "explanation": "The reading divided by RLA is 21.6 / 18.0 = 1.20, or 120 percent, above the roughly 110 percent a technician should accept, so the cause (low voltage, high head, a bad capacitor) must be found. Eighty-three percent comes from dividing in the wrong direction. A locked rotor would draw several times RLA, far above 150 percent. Normal range would be near 100 percent, and 105 percent is not what the numbers give.",
    "id": 94
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "On a single-phase hermetic compressor, the C to R resistance is 1.4 ohms and the C to S resistance is 3.8 ohms. What should the S to R resistance read?",
    "options": {
      "A": "2.4 ohms, found by subtracting the run reading from the start reading",
      "B": "2.6 ohms, found by averaging the two other readings together",
      "C": "5.2 ohms, found by adding the two other readings together",
      "D": "5.3 ohms, found by multiplying the lower reading by the higher one"
    },
    "answer": "C",
    "explanation": "The two windings are in series between S and R, so the S to R reading equals C to S plus C to R, which is 3.8 + 1.4 = 5.2 ohms. Subtracting would give 2.4 ohms, which is smaller than the start winding alone and impossible. Averaging gives 2.6 ohms, which also falls below the start winding and has no basis in the circuit. Multiplying has no electrical meaning for resistances in series.",
    "id": 95
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "Why does a compressor with a crankcase heater resist damage at startup after a long off period?",
    "options": {
      "A": "The heater boils refrigerant out of the oil during the off cycle",
      "B": "The heater raises the discharge pressure to help the compressor start",
      "C": "The heater warms the motor windings so the start capacitor is not needed",
      "D": "The heater lowers the suction pressure so the compressor unloads at startup"
    },
    "answer": "A",
    "explanation": "Warm oil keeps liquid refrigerant from dissolving in it during the off cycle, so the oil does not foam when the pressure drops at startup. The heater has no effect on discharge pressure, which is set by system operation. Heating the windings does not replace a start capacitor, which supplies the phase shift needed for starting torque. Heating the crankcase would not lower suction pressure, and the compressor has no unloading role here.",
    "id": 96
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "Which condition would most directly cause liquid slugging in a reciprocating compressor?",
    "options": {
      "A": "A clean condenser coil with high airflow and a low head pressure",
      "B": "A high compression ratio caused by a very low suction pressure",
      "C": "A suction line that is well insulated and sloped toward the evaporator",
      "D": "Liquid refrigerant returning from a flooded evaporator with low airflow"
    },
    "answer": "D",
    "explanation": "Slugging happens when liquid refrigerant or oil enters the cylinders, and low evaporator airflow lets the coil flood so liquid returns down the suction line. A clean condenser with low head pressure does not send liquid to the compressor. A high compression ratio causes overheating, not slugging. A suction line that is insulated and sloped properly is good practice that helps oil return and prevents condensation.",
    "id": 97
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "A semi-hermetic compressor has an oil pump. The pump discharge reads 52 psig and the crankcase (suction) pressure reads 44 psig. What is the net oil pressure, and is it adequate for a typical requirement of at least 9 psi?",
    "options": {
      "A": "96 psi, which is far above the requirement",
      "B": "8 psi, which is below the 9 psi typical minimum",
      "C": "8 psi, which is above the 9 psi typical minimum",
      "D": "52 psi, which is the gross reading and has no limit"
    },
    "answer": "B",
    "explanation": "Net oil pressure is pump pressure minus crankcase pressure, which is 52 - 44 = 8 psi, and 8 is below a 9 psi minimum, so the control would trip the compressor. Adding the two readings to get 96 psi is not how net pressure is found. Calling 8 psi above the minimum reverses the comparison. The gross pump reading of 52 psig ignores the crankcase pressure, and the net value is what limits bearing lubrication.",
    "id": 98
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "What is the theoretical displacement of a four-cylinder compressor with a bore of 1.5 inches, a stroke of 1.25 inches, running at 1,750 RPM? Use pi/4 x bore squared for the area.",
    "options": {
      "A": "About 4.5 CFM, found by counting only two of the four cylinders",
      "B": "About 17.9 CFM, found by counting each stroke twice",
      "C": "About 8.9 CFM, found from bore area times stroke times cylinders times RPM",
      "D": "About 6.3 CFM, found by applying a 70 percent volumetric efficiency to the result"
    },
    "answer": "C",
    "explanation": "Bore area is 0.7854 x 2.25 = 1.767 square inches, one swept volume is 1.767 x 1.25 = 2.209 cubic inches, four cylinders give 8.836 cubic inches, times 1,750 gives 15,463 cubic inches per minute, and dividing by 1,728 gives about 8.9 CFM. A value near 4.5 counts only two of the four cylinders. A value near 17.9 counts each stroke twice. A value near 6.3 is the actual flow at 70 percent volumetric efficiency, not the theoretical displacement the question asks for.",
    "id": 99
  },
  {
    "domain": "components",
    "chapter": 10,
    "question": "A technician checks a compressor with an ohmmeter and gets a reading of 2 megohms from the S terminal to the copper suction line, and a reading of infinity from the C and R terminals. What does the result show?",
    "options": {
      "A": "The S winding is grounded and the compressor must be replaced",
      "B": "The windings are healthy because ground resistance is above 1 megohm",
      "C": "The internal overload is open and the compressor must cool down first",
      "D": "The run winding is shorted to the start winding inside the shell"
    },
    "answer": "B",
    "explanation": "A reading of 2 megohms to ground is above the common 1 megohm minimum, so the insulation is good, and infinity from the other terminals is also normal. A grounded winding would read very low resistance to the shell, not 2 megohms. An open overload would show open between windings, not give a ground measurement. A short between the run and start windings would show up as a wrong winding-to-winding resistance, not as a ground reading.",
    "id": 100
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "In which order does refrigerant pass through the three zones of an air-cooled condenser coil?",
    "options": {
      "A": "Subcooling first, then condensing, and last the desuperheating zone at the coil outlet",
      "B": "Condensing first, then desuperheating, and last the subcooling zone at the coil outlet",
      "C": "Desuperheating first, then condensing, and last the subcooling zone at the coil outlet",
      "D": "Desuperheating first, then subcooling, and last the condensing zone at the coil outlet"
    },
    "answer": "C",
    "explanation": "Vapor from the compressor first cools to its saturation temperature in the desuperheating zone, then changes to liquid at constant temperature while condensing, and finally the liquid cools below saturation in the subcooling zone. Listing subcooling first would mean liquid exists before any vapor has condensed. Putting condensing before desuperheating ignores that discharge vapor is superheated. Placing subcooling before condensing makes no sense since subcooling needs liquid.",
    "id": 101
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "A 5-ton air conditioner absorbs 60,000 BTU/hr in the evaporator. Using a heat of rejection factor of 1.25, how much heat must the condenser reject?",
    "options": {
      "A": "75,000 BTU/hr, found by multiplying the absorbed heat by the 1.25 rejection factor",
      "B": "60,000 BTU/hr, found by assuming the compressor adds no heat to the refrigerant",
      "C": "48,000 BTU/hr, found by dividing the absorbed heat by the 1.25 rejection factor",
      "D": "120,000 BTU/hr, found by doubling the absorbed heat to cover the compression work"
    },
    "answer": "A",
    "explanation": "The condenser rejects the heat absorbed plus the heat of compression, so 60,000 x 1.25 = 75,000 BTU/hr. A figure of 60,000 would be right only if the compressor added no heat. A figure of 48,000 results from dividing by 1.25 instead of multiplying, which would make the condenser reject less than the evaporator absorbs. A figure of 120,000 doubles the load, which ignores that the compression heat is only about a quarter of the absorbed heat.",
    "id": 102
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "An air-cooled condenser must reject 45,000 BTU/hr. The air passing through warms by 16 degrees F. What airflow is required?",
    "options": {
      "A": "About 1,950 CFM, found by using a factor of 1.44 in place of 1.08",
      "B": "About 3,100 CFM, found by using an air temperature rise of only 13.5 degrees F",
      "C": "About 2,800 CFM, found by using an air temperature rise of 15 degrees F",
      "D": "About 2,600 CFM, found by dividing the heat by 1.08 times the 16 degree rise"
    },
    "answer": "D",
    "explanation": "Using Q = 1.08 x CFM x delta T, CFM = 45,000 / (1.08 x 16) = 45,000 / 17.28, which is about 2,600 CFM. A value near 1,950 results from using 1.44 in place of 1.08. A value near 3,100 results from a temperature rise of only 13.5 degrees F. A value near 2,800 results from a temperature rise of 15 degrees F instead of the stated 16.",
    "id": 103
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "On a hot day, an R-22 system has a discharge pressure of 243 psig (115 degrees F saturation) and a liquid line temperature of 105 degrees F. What is the subcooling?",
    "options": {
      "A": "10 degrees F, found by subtracting liquid line temperature from saturation temperature",
      "B": "8 degrees F, found by assuming a liquid line temperature of 107 degrees F",
      "C": "20 degrees F, found by subtracting the 95 degree outdoor air from saturation temperature",
      "D": "12 degrees F, found by assuming a liquid line temperature of 103 degrees F"
    },
    "answer": "A",
    "explanation": "Subcooling is saturation temperature at liquid pressure minus liquid line temperature, so 115 - 105 = 10 degrees F. Eight degrees would need a liquid line temperature of 107. Twenty degrees F is the condenser temperature difference if the outdoor air were 95 degrees F, which is a different measurement. Twelve degrees would need a liquid line temperature of 103 degrees F.",
    "id": 104
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "A water-cooled condenser must reject 60,000 BTU/hr, and the water temperature rises 10 degrees F. What water flow is required?",
    "options": {
      "A": "6 GPM, found by using a 20 degree F rise in place of the stated 10",
      "B": "9 GPM, found from a heat load of 45,000 BTU/hr instead of 60,000",
      "C": "18 GPM, found by using a water temperature rise of only 6.7 degrees F",
      "D": "12 GPM, found by dividing the load by 500 times the 10 degree rise"
    },
    "answer": "D",
    "explanation": "Using Q = 500 x GPM x delta T, GPM = 60,000 / (500 x 10) = 12 GPM. A flow of 6 GPM would result from using a 20 degree rise instead of 10. A flow of 9 GPM is the answer for a load of 45,000 BTU/hr, which is a different system. A flow of 18 GPM results from using a rise of about 6.7 degrees F, which does not match the stated conditions.",
    "id": 105
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "Compared with a clean condenser, what combination of readings does a heavily dirty air-cooled condenser coil usually produce?",
    "options": {
      "A": "High head pressure, high condenser temperature difference, and high compressor amps",
      "B": "Low head pressure, low condenser temperature difference, and low compressor amps",
      "C": "High head pressure, low condenser temperature difference, and low compressor amps",
      "D": "Low head pressure, high condenser temperature difference, and high compressor amps"
    },
    "answer": "A",
    "explanation": "A coil that cannot reject heat forces the condensing temperature up, which raises head pressure, widens the temperature difference to the air and makes the compressor work harder. Low readings in all three would describe a low-ambient or low-charge fault. High head with low temperature difference is contradictory, since the difference is computed from head. Low head with high difference is also contradictory.",
    "id": 106
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "What is the purpose of a head pressure control on a commercial refrigeration condenser?",
    "options": {
      "A": "To lower the compressor discharge temperature during very hot weather when head pressure is high",
      "B": "To hold enough head pressure in cold weather for the metering device to feed",
      "C": "To raise the superheat at the compressor suction line during warm weather operation",
      "D": "To remove noncondensable gas from the high side whenever it slowly accumulates over time"
    },
    "answer": "B",
    "explanation": "In cold weather the condensing pressure falls, and a metering device that depends on a pressure difference starves the evaporator, so the control holds head pressure up. Lowering discharge temperature in hot weather is not its job, and fan cycling does nothing in heat. Raising superheat is controlled by the metering device. Purging noncondensables requires recovery and evacuation, not a head pressure control.",
    "id": 107
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "A cooling tower is operating when the outdoor wet-bulb temperature is 78 degrees F, with a 7 degree F approach and a 10 degree F range. What temperature of water enters the tower from the condenser?",
    "options": {
      "A": "85 degrees F, found by adding the approach to the wet-bulb temperature",
      "B": "88 degrees F, found by adding the approach and range to the wrong base",
      "C": "95 degrees F, found by adding both the approach and the range",
      "D": "105 degrees F, found by adding the range to the entering water twice"
    },
    "answer": "C",
    "explanation": "Leaving water is wet bulb plus approach, 78 + 7 = 85 degrees F, and entering water is leaving water plus range, 85 + 10 = 95 degrees F. Eighty-five is the water leaving the tower, not entering it. Eighty-eight would add the approach and range to the wrong base. One hundred five would add the range twice.",
    "id": 108
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "An R-22 system has been off overnight, and the outdoor and indoor temperatures have equalized at 80 degrees F. The gauges read 160 psig. The chart shows about 145 psig at 80 degrees F. What does the result suggest?",
    "options": {
      "A": "The system is low on refrigerant and needs more charge added right away",
      "B": "The condenser fan is too small for the coil",
      "C": "The metering device is restricted with moisture at the inlet",
      "D": "Noncondensable gas is trapped in the system and needs to be removed"
    },
    "answer": "D",
    "explanation": "A pressure about 15 psi above the chart value in a stabilized system points to air or another noncondensable gas adding pressure, so recover, evacuate and recharge. A low charge would still show saturation pressure if any liquid remained, not a high one. A fan size problem affects running pressure, not the equalized off pressure. A restricted metering device does not raise the static pressure of a stabilized system.",
    "id": 109
  },
  {
    "domain": "components",
    "chapter": 11,
    "question": "Why is a long vertical liquid line a concern for subcooling?",
    "options": {
      "A": "Gravity pulls liquid down faster and increases the flow through the drier",
      "B": "Pressure loss from the lift can flash the liquid when subcooling is too small",
      "C": "Vertical lines allow oil to collect at the top and block the liquid flow",
      "D": "The condenser temperature difference rises with height and increases the head pressure"
    },
    "answer": "B",
    "explanation": "Lifting liquid uses up pressure, and if the liquid has little subcooling it can boil into vapor, which starves the metering device. Gravity effects do not increase flow in a way that matters here. Oil collection at the top is a problem for suction lines, not liquid lines. The condenser split is measured at the coil and is not affected by the line height.",
    "id": 110
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "What happens to the refrigerant inside a direct expansion evaporator as it passes through the coil?",
    "options": {
      "A": "It condenses from vapor to liquid and releases heat to the room air",
      "B": "It boils from liquid to vapor and absorbs heat from the passing air",
      "C": "It stays liquid throughout and cools the air by conduction only",
      "D": "It is compressed to a higher pressure and temperature along the tubes"
    },
    "answer": "B",
    "explanation": "In the evaporator, low-pressure liquid boils to vapor and takes in heat from the air passing over the coil. Condensing from vapor to liquid and releasing heat is the work of the condenser. Staying liquid throughout would remove very little heat, because most of the cooling comes from the latent heat of boiling. Compression is done only by the compressor, not along the evaporator tubes.",
    "id": 111
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "An air handler moves 1,200 CFM and cools the air from 75 degrees F to 55 degrees F. How much sensible heat does it remove?",
    "options": {
      "A": "About 14,300 BTU/hr, found by using a temperature drop of only 11 degrees F",
      "B": "About 36,000 BTU/hr, which is the nameplate rating of a three-ton system",
      "C": "About 19,500 BTU/hr, found by using a temperature drop of about 15 degrees F",
      "D": "About 25,900 BTU/hr, found by multiplying 1.08 by 1,200 CFM and 20 degrees"
    },
    "answer": "D",
    "explanation": "Sensible heat is 1.08 x 1,200 x 20 = 25,920 BTU/hr. A value near 14,300 results from a temperature drop of only 11 degrees F. A value of 36,000 is the nameplate rating of a 3-ton system, not the result of this formula. A value near 19,500 results from using a temperature drop of about 15 degrees F instead of 20.",
    "id": 112
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "A system has 65 grains of moisture per pound entering and 56 grains per pound leaving, with 1,200 CFM. What is the latent heat removed?",
    "options": {
      "A": "About 7,300 BTU/hr, found by multiplying 0.68 by 1,200 CFM and 9 grains",
      "B": "About 4,400 BTU/hr, found by using a moisture difference of only 5.4 grains",
      "C": "About 9,800 BTU/hr, found by using a moisture difference of about 12 grains",
      "D": "About 25,900 BTU/hr, which is the sensible load for a 20 degree drop"
    },
    "answer": "A",
    "explanation": "Latent heat is 0.68 x CFM x delta grains, so 0.68 x 1,200 x 9 = 7,344 BTU/hr. A value near 4,400 would result from a moisture difference of about 5.4 grains, not the 9 given. A value near 9,800 would require a difference of about 12 grains. A value of 25,900 is the sensible load for a 20 degree drop, a different quantity entirely.",
    "id": 113
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "On an R-22 system, the suction gauge reads 68 psig (40 degrees F saturation) and the suction line temperature at the coil outlet is 52 degrees F. What is the superheat?",
    "options": {
      "A": "40 degrees F, which is simply the saturation temperature and not a temperature difference",
      "B": "92 degrees F, found by adding the saturation and suction line temperatures together",
      "C": "12 degrees F, found by subtracting saturation temperature from suction line temperature",
      "D": "8 degrees F, found by assuming a suction line temperature of only 48 degrees F"
    },
    "answer": "C",
    "explanation": "Superheat is suction line temperature minus saturation temperature, so 52 - 40 = 12 degrees F. A value of 40 is just the saturation temperature, not a difference. A value of 92 adds the two temperatures instead of subtracting. A value of 8 would require a suction line temperature of 48 degrees F.",
    "id": 114
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "A technician finds low suction pressure, low superheat, a large temperature split across the coil and ice forming. Which cause is most likely?",
    "options": {
      "A": "A low refrigerant charge caused by a slow leak somewhere in the lines",
      "B": "Low airflow across the coil from a dirty filter or slow blower",
      "C": "A failed condenser fan motor on the outdoor unit that stopped running",
      "D": "A restricted liquid line drier ahead of the metering device that causes pressure drop"
    },
    "answer": "B",
    "explanation": "Low airflow makes the coil colder, lowers suction pressure, keeps superheat low because the refrigerant does not get enough heat to overheat, and raises the temperature split. A low charge also gives low suction and ice, but superheat would be high. A failed condenser fan raises head pressure and suction pressure, not low suction. A restricted drier gives low suction with high superheat.",
    "id": 115
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "What is the correct first step after finding a frozen evaporator coil on a residential air conditioner?",
    "options": {
      "A": "Scrape the ice off the fins with a screwdriver to speed up the thaw",
      "B": "Add refrigerant until the suction pressure rises above 68 psig",
      "C": "Shut off the compressor and run only the blower to melt the ice",
      "D": "Pour hot water over the coil and restart the system immediately"
    },
    "answer": "C",
    "explanation": "Running the blower alone with the compressor off thaws the coil safely, after which the cause can be found. Scraping damages the fins and tubes and can puncture the coil. Adding refrigerant to a system with an airflow problem raises head pressure and risks flooding the compressor. Restarting before fixing the cause refreezes the coil, and hot water on a coil is both messy and risky near electrical parts.",
    "id": 116
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "A walk-in cooler must hold 35 degrees F with a 10 degree F evaporator TD for produce. What should the evaporator saturation temperature be?",
    "options": {
      "A": "25 degrees F, found by subtracting the 10 degree TD from the box temperature",
      "B": "15 degrees F, found by using a 20 degree TD that would dry the produce",
      "C": "45 degrees F, found by adding the TD to the box temperature instead",
      "D": "35 degrees F, which equals the box temperature and leaves zero TD"
    },
    "answer": "A",
    "explanation": "The saturation temperature is the box temperature minus the TD, so 35 - 10 = 25 degrees F. A saturation temperature of 15 degrees F would imply a 20 degree TD, which dries the produce. A temperature of 45 would put the coil warmer than the box so no heat would flow into it. A temperature of 35 would have zero TD and no heat transfer.",
    "id": 117
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "Why does a large evaporator temperature difference reduce the humidity in the conditioned space?",
    "options": {
      "A": "A colder coil raises the dew point of the air passing through it",
      "B": "A colder coil lowers the airflow, which dries the air by standing time",
      "C": "A colder coil condenses more moisture from the air onto the fins",
      "D": "A colder coil adds heat to the air so the relative humidity falls"
    },
    "answer": "C",
    "explanation": "The colder the coil surface is below the dew point of the air, the more water vapor condenses on the fins and drains away. A colder coil does not raise the dew point of the air, which is a property of its moisture content. Standing time is not a mechanism that dries air. A colder coil removes heat, not adds it, so it does not lower relative humidity by warming.",
    "id": 118
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "What is the purpose of a fan delay after a defrost cycle on a unit cooler?",
    "options": {
      "A": "To let the compressor build head pressure before the fans start",
      "B": "To let melted water refreeze on the coil instead of blowing into the room",
      "C": "To allow the oil to drain back to the compressor sump after defrost",
      "D": "To warm the box before the next cycle so the product does not freeze"
    },
    "answer": "B",
    "explanation": "After defrost, the coil is wet and warm, and a short delay lets the droplets freeze onto the fins so the fans do not throw water into the box. Building head pressure is not the purpose of the delay, which is controlled by the compressor and condenser. Oil return depends on refrigerant velocity, not a fan timer. Warming the box would raise the product temperature, the opposite of what is wanted.",
    "id": 119
  },
  {
    "domain": "components",
    "chapter": 12,
    "question": "A residential coil is moving 780 CFM when the design is 1,200 CFM. What percent of design airflow is this?",
    "options": {
      "A": "154 percent, found by dividing the design airflow by the measured airflow instead",
      "B": "35 percent, which is the shortfall from design rather than the airflow itself",
      "C": "78 percent, found by reading 780 CFM as a percentage without dividing",
      "D": "65 percent, found by dividing 780 CFM measured by 1,200 CFM design"
    },
    "answer": "D",
    "explanation": "The percentage is 780 divided by 1,200, which is 0.65 or 65 percent of design. A value of 154 percent results from dividing the design by the measured flow, which inverts the ratio. A value of 35 percent is the shortfall (100 - 65), not the airflow itself. A value of 78 percent results from reading the 780 as 78 percent without dividing.",
    "id": 120
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "A technician finds a system with high superheat, low suction pressure, and high subcooling. Which problem is most likely?",
    "options": {
      "A": "An oversized piston is letting too much liquid into the evaporator and flooding the suction line.",
      "B": "A severe refrigerant leak has left the condenser mostly empty of liquid and the coil dry.",
      "C": "A restricted metering device is holding liquid back in the condenser, while the evaporator starves.",
      "D": "A failed condenser fan motor is driving the head pressure above normal and raising subcooling."
    },
    "answer": "C",
    "explanation": "Liquid trapped behind a restriction raises subcooling in the condenser and leaves the evaporator dry, which gives high superheat and low suction pressure together. A leak lowers subcooling because the condenser lacks liquid. An oversized piston floods the coil and gives low superheat. A dead condenser fan raises head pressure and discharge temperature, but it does not make the evaporator run dry.",
    "id": 121
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "In a thermostatic expansion valve at steady balance, which pair of forces acts together to oppose the bulb pressure?",
    "options": {
      "A": "The liquid line pressure and the force of gravity on the needle pin.",
      "B": "The spring pressure and the evaporator pressure pushing up on the diaphragm.",
      "C": "The condenser pressure and the pressure inside the external equalizer tube together.",
      "D": "The suction line temperature and the spring tension acting on the sealed bulb."
    },
    "answer": "B",
    "explanation": "Bulb pressure opens the valve. Evaporator pressure plus spring pressure close it, and at balance the three are equal. Liquid line pressure acts on the inlet side of the pin and does not take part in the diaphragm balance. The equalizer tube carries evaporator outlet pressure, not condenser pressure. Temperature is not a force, and the spring does not act on the bulb.",
    "id": 122
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "An R-410A system has a TXV with an evaporator at 40 degrees F, about 118 psig. The bulb reads 50 degrees F, about 142 psig. What spring pressure holds this superheat?",
    "options": {
      "A": "About 12 psi, since the spring and the bulb share the work equally between them.",
      "B": "About 260 psi, found by adding the evaporator pressure to the bulb pressure.",
      "C": "About 142 psi, since the spring must match the full bulb pressure at the valve.",
      "D": "About 24 psi, found by subtracting the evaporator pressure from the bulb pressure."
    },
    "answer": "D",
    "explanation": "Bulb pressure equals evaporator pressure plus spring pressure, so spring pressure is 142 minus 118, or about 24 psi. Halving does not apply, because the forces are not shared that way. The full bulb pressure includes the evaporator pressure, so the spring need not match all of it. Adding the two pressures gives a meaningless number, since the evaporator pressure is already part of the balance.",
    "id": 123
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "When should a TXV use an external equalizer instead of an internal one?",
    "options": {
      "A": "When the evaporator has a distributor that causes a noticeable pressure drop through the coil.",
      "B": "When the system uses a piston in the outdoor unit instead of an adjustable valve.",
      "C": "When the liquid line is very short and the subcooling is above average.",
      "D": "When the compressor is a scroll type that needs a higher superheat at startup."
    },
    "answer": "A",
    "explanation": "A distributor and its tubes drop the pressure, so the valve outlet pressure is higher than the coil outlet pressure, and an external line gives the diaphragm the true outlet pressure. A piston system has no diaphragm to equalize. Line length and subcooling do not change the pressure the diaphragm should sense. Compressor type has no bearing on which equalizer is used.",
    "id": 124
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "A 4-ton R-410A system has a TXV with a bulb clamped loosely on a painted suction line and left uninsulated in a warm cabinet. What is the likely result?",
    "options": {
      "A": "The bulb reads cooler than the pipe, so the valve closes and starves the coil.",
      "B": "The bulb pressure stays the same, so the valve does not change its opening.",
      "C": "The bulb reads warmer than the pipe, so the valve opens too far and floods.",
      "D": "The bulb loses its charge at once, so the valve closes and the compressor stops."
    },
    "answer": "C",
    "explanation": "A loose, uninsulated bulb is warmed by the surrounding air, so it reports a temperature higher than the suction line really is. A higher bulb pressure pushes the valve open, which overfeeds the coil and floods it. A cooler bulb reading would do the opposite, but warm cabinet air does not cool the bulb. Unchanged bulb pressure and an instant loss of charge are both unrelated to poor clamping.",
    "id": 125
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "Which statement about a capillary tube is correct?",
    "options": {
      "A": "It is used mainly on large chillers because it can hold a steady liquid level there.",
      "B": "It adjusts to changes in superheat by moving a needle in response to bulb pressure.",
      "C": "It can be shortened in the field to raise the evaporator pressure on a cold day.",
      "D": "Its flow depends mostly on inside diameter, with length and pressure difference also mattering."
    },
    "answer": "D",
    "explanation": "Flow resistance rises steeply as the inside diameter shrinks, and length and pressure difference matter as well. A capillary tube is a fixed restriction with no needle and cannot sense superheat. Cutting it changes the flow and breaks the manufacturer's design. Constant-level control is the job of a float device in large flooded systems, not of a small-diameter copper tube.",
    "id": 126
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "A 3-ton system with a fixed piston shows 6 degrees F of superheat on a mild day and 22 degrees F of superheat on a hot day. What does this show?",
    "options": {
      "A": "The piston is failing and must be replaced before the next cooling season begins.",
      "B": "A fixed orifice cannot hold steady superheat, so a charging chart is used.",
      "C": "The system is overcharged, since superheat should never change with the weather outside.",
      "D": "The evaporator is partly iced, and a defrost cycle should be run immediately."
    },
    "answer": "B",
    "explanation": "A piston has no feedback, so superheat moves with indoor wet bulb and outdoor temperature, which is why manufacturers publish a target superheat chart. This swing is normal behavior, not a failed part. Overcharge would show high subcooling and low superheat, not a wide change with weather. Ice would drop suction pressure and starve the coil, and the readings here are ordinary.",
    "id": 127
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "A 5-ton valve is installed on a 4-ton R-410A system. Suction pressure swings between 112 and 135 psig every 40 seconds. What is the most likely cause?",
    "options": {
      "A": "An oversized valve that opens and closes too far and overshoots its target.",
      "B": "A dirty condenser coil, since head pressure rises and falls with every cycle.",
      "C": "A shortage of refrigerant, since the suction pressure keeps dropping below normal.",
      "D": "A failed compressor valve, since the suction pressure rises whenever the piston stalls."
    },
    "answer": "A",
    "explanation": "A valve that is too large overfeeds when it opens and then overcorrects by closing, which produces a regular swing called hunting. A refrigerant shortage gives a steady low suction pressure, not a swing. A dirty condenser raises head pressure steadily and does not cause a 40-second suction oscillation. A bad compressor valve gives poor pumping and a high, steady suction pressure.",
    "id": 128
  },
  {
    "domain": "components",
    "chapter": 13,
    "question": "What is the main advantage of an electronic expansion valve over a thermostatic valve?",
    "options": {
      "A": "It requires no sensors, because the valve senses pressure through the capillary line alone.",
      "B": "It allows the system to run without a filter drier or a liquid line strainer.",
      "C": "It holds a very low, adjustable superheat and responds quickly when the load changes.",
      "D": "It lowers the condensing pressure by opening wider as the outdoor air grows warmer."
    },
    "answer": "C",
    "explanation": "A controller using a thermistor and pressure transducer drives a stepper motor in small steps, so it can hold superheat as low as 4 to 8 degrees F and change it while running. It needs sensors, not none. Debris protection is still needed. Condensing pressure depends on the condenser and ambient air, and the valve does not act to lower it.",
    "id": 129
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "A technician measures 92 degrees F at the inlet of a liquid-line drier and 78 degrees F at its outlet. What does this indicate?",
    "options": {
      "A": "The refrigerant is losing heat normally as it travels through the drier body.",
      "B": "The liquid line is oversized, and flow is slowing down through the whole circuit.",
      "C": "The desiccant is saturated with moisture, and the drier is ready to be reused.",
      "D": "The drier is restricted, and pressure is falling across it, causing flash gas."
    },
    "answer": "D",
    "explanation": "A 14 degree F drop across a short drier cannot come from normal heat loss. It comes from pressure falling across a restriction, which lets some liquid flash to vapor and cool the stream. A saturated desiccant does not cool the flow, and a used drier is never reused in the field. An oversized line does not cause a sudden drop in temperature at one point.",
    "id": 130
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "Which desiccant is best suited to remove acid after a compressor burnout?",
    "options": {
      "A": "Silica gel, because it reacts with acid and converts it into a neutral salt.",
      "B": "Activated alumina, because it attracts acid as well as water from the oil.",
      "C": "Plain steel mesh, because it traps acid particles on the filter surface.",
      "D": "Pure copper beads, because they break acid down into harmless metal oxides."
    },
    "answer": "B",
    "explanation": "Activated alumina holds water and also takes up acid, so it is the usual choice in burnout driers. Silica gel mainly holds water and can release some of it at higher temperatures. Steel mesh filters only solid particles and has no effect on dissolved acid. Copper beads would add metal particles and are not used in driers.",
    "id": 131
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "A receiver has an internal volume of 1.5 cubic feet, and the liquid refrigerant weighs 70 pounds per cubic foot. What is the most it should hold at an 80 percent fill?",
    "options": {
      "A": "About 84 pounds, found from 0.80 times 1.5 times 70.",
      "B": "About 105 pounds, found by filling the whole 1.5 cubic feet with liquid.",
      "C": "About 56 pounds, found from 0.80 times 70 and ignoring the volume.",
      "D": "About 130 pounds, found by adding the density to the fill percentage."
    },
    "answer": "A",
    "explanation": "The 80 percent limit applies to volume, so the safe load is 0.80 times 1.5 cubic feet times 70 pounds per cubic foot, which is 84 pounds. A full tank leaves no expansion room and risks bursting when warmed. Leaving out the volume gives a number with no link to the tank size. Adding density to a percentage mixes unrelated quantities and has no meaning.",
    "id": 132
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "What is the purpose of the small hole at the bottom of the U-tube in a suction accumulator?",
    "options": {
      "A": "It equalizes the pressure between the high side and the low side during defrost.",
      "B": "It lets the technician pull a sample of acid from the suction line.",
      "C": "It lets liquid and oil bleed out slowly so oil returns to the compressor.",
      "D": "It lets trapped air escape from the shell when the system is first charged."
    },
    "answer": "C",
    "explanation": "The hole meters a small amount of liquid and oil into the vapor stream so the oil that collects in the accumulator goes back to the crankcase in small amounts. It is not a sampling port. It does not connect to the high side. Air is removed by evacuation, not by a metering hole, and a blocked hole starves the compressor of oil.",
    "id": 133
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "A technician needs to isolate the outdoor unit from the rest of the system to replace a component. How should the liquid-line service valve be set?",
    "options": {
      "A": "Front-seated with the stem turned fully in, so flow toward the system is blocked.",
      "B": "Mid-seated about halfway, so gauges can read the pressure while flow continues.",
      "C": "Back-seated with the stem turned fully out, so the line and port are both open.",
      "D": "Left unchanged and covered with its cap, since the valve is only for checking pressure."
    },
    "answer": "A",
    "explanation": "Front-seating closes the passage between the service port side and the system and so isolates a section for recovery or repair. A back-seated stem is the normal running position and isolates nothing. A mid-seated stem opens the port for gauges but also leaves the line open to the system. Leaving the valve as found does nothing to isolate the unit.",
    "id": 134
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "On a pump down, what happens after the liquid-line solenoid valve closes?",
    "options": {
      "A": "The compressor stops at once, and the refrigerant stays spread through the whole system.",
      "B": "The metering device opens fully, and the evaporator fills with liquid before the stop.",
      "C": "The condenser fan stops first, and the head pressure rises until the relief valve opens.",
      "D": "The compressor draws the low side down, and a low-pressure switch then stops it."
    },
    "answer": "D",
    "explanation": "With liquid cut off, the running compressor pulls the evaporator and suction line to a low pressure, and the low-pressure switch opens to stop it, which leaves refrigerant stored on the high side. The compressor does not stop the instant the solenoid closes. A relief valve is not part of a normal pump down. The evaporator empties during a pump down, rather than filling with liquid.",
    "id": 135
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "An R-410A system shows 26 degrees F of superheat, 9 degrees F of subcooling and a cold liquid line just after the drier. Which action should come first?",
    "options": {
      "A": "Add refrigerant until the sight glass is clear and the superheat drops to normal.",
      "B": "Replace the compressor, because the superheat is too high to be anything else.",
      "C": "Replace the restricted drier, since the cold outlet shows a pressure drop there.",
      "D": "Increase the TXV superheat setting by two full turns to raise the suction pressure."
    },
    "answer": "C",
    "explanation": "High superheat with normal subcooling and a cold spot after the drier points to a restriction at the drier, so the drier is replaced. Adding charge would raise the head pressure and does not cure a restriction. A compressor that pumps normally does not cause this pattern. Raising the TXV setting would make the valve close further and worsen the starving.",
    "id": 136
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "Why is a crankcase heater used on many compressors?",
    "options": {
      "A": "It raises the discharge temperature so the oil separator can work more quickly.",
      "B": "It keeps oil warm so refrigerant does not condense into it when off.",
      "C": "It melts frost from the evaporator before each cooling cycle starts for the day.",
      "D": "It reduces the starting current by lowering the winding resistance in the motor."
    },
    "answer": "B",
    "explanation": "A warm crankcase prevents refrigerant from migrating into the oil, which would foam at startup and starve the bearings. It does not affect discharge temperature in any useful way. Frost removal is done by a defrost system and has nothing to do with the compressor sump. A heater has no effect on winding resistance or on starting current.",
    "id": 137
  },
  {
    "domain": "components",
    "chapter": 14,
    "question": "A suction-line filter drier shows a pressure drop of 2 psi at startup and 7 psi after three days. What does this show?",
    "options": {
      "A": "The filter is loading with debris, and it should be replaced or removed.",
      "B": "The drier is working correctly, since a rising pressure drop means a clean system.",
      "C": "The refrigerant charge is low, and more refrigerant must be added to the system.",
      "D": "The compressor has lost its oil, and the motor must be checked for a short."
    },
    "answer": "A",
    "explanation": "A growing pressure drop across a suction drier means the filter is catching debris and plugging, so it is replaced or removed once the system is clean. A clean system keeps a stable drop. Low charge lowers the suction pressure but does not cause a rising drop across one part. Oil loss and a shorted motor would show up as different symptoms such as noise or tripped protectors.",
    "id": 138
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "Air at 30 degrees F and 80 percent RH is warmed to 70 degrees F with no moisture added. What happens to its relative humidity and humidity ratio?",
    "options": {
      "A": "Relative humidity rises sharply, and the humidity ratio stays the same.",
      "B": "Relative humidity falls sharply, and the humidity ratio stays the same.",
      "C": "Relative humidity stays the same, and the humidity ratio falls with the rise.",
      "D": "Relative humidity falls sharply, and the humidity ratio rises by the same amount."
    },
    "answer": "B",
    "explanation": "Warm air can hold much more water than cold air, so the same amount of moisture is a small fraction of the larger capacity and the relative humidity drops to about 18 percent. Since no water was added or removed, the humidity ratio is unchanged. Relative humidity cannot rise when air is warmed without added moisture, and a ratio that rises would require water to be added.",
    "id": 139
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "Which statement correctly orders the three temperatures for air that is not fully saturated?",
    "options": {
      "A": "Dry bulb is lowest, wet bulb is in the middle, and dew point is highest.",
      "B": "Wet bulb is highest, dew point is in the middle, and dry bulb is lowest.",
      "C": "All three are equal, because they measure the same heat in the air.",
      "D": "Dry bulb is highest, wet bulb is in the middle, and dew point is lowest."
    },
    "answer": "D",
    "explanation": "Evaporation cools the wet bulb below the dry bulb, and the dew point is the temperature at which the air would just reach saturation, which lies below the wet bulb. Reversing the order would require the wick to heat up. The three are equal only at saturation, and in unsaturated air they differ because each measures a different property.",
    "id": 140
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "A coil moves 1,000 CFM of air and cools it from 80 degrees F to 60 degrees F. What is the sensible heat removed?",
    "options": {
      "A": "About 21,600 BTU per hour, found from 1.08 times CFM times 20 degrees F.",
      "B": "About 12,000 BTU per hour, found from 0.60 times CFM times the temperature drop.",
      "C": "About 90,000 BTU per hour, found from 4.5 times CFM times 20 degrees F.",
      "D": "About 90,000 BTU per hour, found from 4.5 times CFM times the temperature drop."
    },
    "answer": "A",
    "explanation": "Sensible heat is 1.08 x 1,000 x 20, which is 21,600 BTU per hour. The factor 4.5 belongs to enthalpy differences, not temperature differences, and applying it to a temperature drop gives a much larger and meaningless number. The factor 0.60 does not belong to any standard airflow formula for air at standard conditions.",
    "id": 141
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "A coil takes 1,000 CFM of air from 70 grains per pound of moisture to 60 grains per pound. What latent heat is removed?",
    "options": {
      "A": "About 680 BTU per hour, found by multiplying 0.68 by the 10 grain difference.",
      "B": "About 10,800 BTU per hour, found from 1.08 times 1,000 times 10.",
      "C": "About 6,800 BTU per hour, found from 0.68 times 1,000 times 10.",
      "D": "About 45,000 BTU per hour, found from 4.5 times 1,000 times 10."
    },
    "answer": "C",
    "explanation": "Latent heat equals 0.68 x CFM x change in grains, which is 0.68 x 1,000 x 10, or 6,800 BTU per hour. Leaving out the airflow gives a tiny number. The 1.08 factor applies to temperature differences, and the 4.5 factor applies to enthalpy differences, so using either on a grain difference mixes the wrong units.",
    "id": 142
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "What is the main reason a cooling coil must have a surface temperature below the dew point of entering air?",
    "options": {
      "A": "The coil must be colder than the dew point before water condenses on it.",
      "B": "The refrigerant needs the dew point to boil at the correct pressure inside the tubes.",
      "C": "The fan needs the dew point to be reached before the blower motor can start running.",
      "D": "The compressor cannot raise its pressure unless the coil sits below the dew point."
    },
    "answer": "A",
    "explanation": "Water vapor condenses only on a surface colder than the dew point of the air touching it, which is how a coil removes moisture. The refrigerant's boiling pressure depends on its own saturation temperature and not on the air's dew point. Fan starting and compressor pressure are controlled by electrical and mechanical conditions, not by the air's dew point.",
    "id": 143
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "Which describes the wet bulb depression?",
    "options": {
      "A": "The difference between the dew point and the wet bulb, shown in degrees F.",
      "B": "The amount of water a coil removes from the air during an hour.",
      "C": "The drop in barometric pressure that happens as a storm front moves in.",
      "D": "The difference between the dry bulb and the wet bulb, shown in degrees F."
    },
    "answer": "D",
    "explanation": "Wet bulb depression is the dry bulb reading minus the wet bulb reading, and a large value means dry air while zero means saturated air. The gap between dew point and wet bulb is a different quantity. Barometric pressure is unrelated to the term. Water removed in an hour is condensate, a separate measurement.",
    "id": 144
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "A fixed-orifice system is being charged on a day when the indoor wet bulb is high. What should the target superheat be?",
    "options": {
      "A": "Higher than on a dry day, because the coil carries a heavier load and needs more refrigerant.",
      "B": "Lower than on a dry day, because the coil carries a heavier load and boils more refrigerant.",
      "C": "The same as on a dry day, because wet bulb has no effect on a fixed orifice.",
      "D": "Exactly zero on every day, because the coil must always run flooded to work."
    },
    "answer": "B",
    "explanation": "A high wet bulb means the air carries more total heat, so the coil boils more refrigerant and the target superheat in the chart is lower. A higher target belongs to a light load. Wet bulb is one of the two chart inputs because it matters for a fixed orifice. Zero superheat would flood the compressor and is never the target.",
    "id": 145
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "A system moves 1,500 CFM, and the air enthalpy falls from 30.0 to 24.0 BTU per pound. What total heat is removed?",
    "options": {
      "A": "About 162,000 BTU per hour, found from 1.08 times 1,500 times 100.",
      "B": "About 9,000 BTU per hour, found from 1.5 times 1,500 times 4.",
      "C": "About 40,500 BTU per hour, found from 4.5 times 1,500 times 6.",
      "D": "About 6,800 BTU per hour, found from 0.68 times 1,500 times 6.7."
    },
    "answer": "C",
    "explanation": "Total heat equals 4.5 x CFM x change in enthalpy, which is 4.5 x 1,500 x 6, or 40,500 BTU per hour, or about 3.4 tons. The other formulas use the wrong factor or invented inputs that do not correspond to this problem's enthalpy values, and so they give numbers that are far too small or too large.",
    "id": 146
  },
  {
    "domain": "air_side",
    "chapter": 15,
    "question": "Why do heated homes often feel dry in winter?",
    "options": {
      "A": "Cold outdoor air holds little moisture, and heating it lowers relative humidity.",
      "B": "Furnaces remove water from the air as it passes through the heat exchanger.",
      "C": "The thermostat lowers the humidity ratio each time the heating cycle starts.",
      "D": "Warm air is denser than cold air and squeezes the water out of itself."
    },
    "answer": "A",
    "explanation": "Outdoor winter air carries little moisture, and heating it raises its capacity for moisture, so relative humidity falls even though the moisture content is unchanged. A furnace heat exchanger does not remove water. A thermostat only switches equipment and does not change humidity. Warm air is less dense than cold air, not denser.",
    "id": 147
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "A 14-inch round duct carries air at 800 FPM. About how many CFM does it deliver?",
    "options": {
      "A": "About 570 CFM, found by multiplying 800 by the diameter in feet of the duct.",
      "B": "About 1,100 CFM, found by multiplying 800 by the diameter in inches.",
      "C": "About 855 CFM, found by multiplying 800 by the area of 1.07 square feet.",
      "D": "About 330 CFM, found by dividing 800 by the area of the duct."
    },
    "answer": "C",
    "explanation": "Airflow equals velocity times cross-sectional area. A 14-inch round duct has a radius of 7 inches, or 0.583 foot, so the area is 3.1416 x 0.340, or 1.07 square feet, and 800 x 1.07 is about 855 CFM. Using the diameter instead of the area, or dividing instead of multiplying, gives values unrelated to the actual cross-section of the duct.",
    "id": 148
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "A blower speed is raised by 20 percent with no other changes. What happens to its power use?",
    "options": {
      "A": "It rises by about 73 percent, in proportion to the cube of the speed.",
      "B": "It rises by about 44 percent, in proportion to the square of the speed.",
      "C": "It rises by about 20 percent, in direct proportion to the change in speed.",
      "D": "It stays nearly the same, since the motor current is limited by the breaker."
    },
    "answer": "A",
    "explanation": "Power varies with the cube of the speed, and 1.2 x 1.2 x 1.2 is 1.728, an increase of about 73 percent. Airflow follows speed directly and static pressure follows the square, which gives a 20 percent and a 44 percent change respectively. A breaker is a safety limit and does not hold power constant, so the draw does increase.",
    "id": 149
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "Return static pressure is negative 0.45 in. w.c., and supply static pressure is positive 0.35 in. w.c. What is the total external static pressure?",
    "options": {
      "A": "0.10 in. w.c., found by subtracting the smaller reading from the larger.",
      "B": "0.40 in. w.c., found by averaging the two readings across the cabinet.",
      "C": "1.60 in. w.c., found by doubling the larger reading in the pair.",
      "D": "0.80 in. w.c., found by adding the two readings as positive numbers."
    },
    "answer": "D",
    "explanation": "Total external static pressure is the sum of the return drop and supply pressure, taken as positive values, so 0.45 + 0.35 is 0.80 in. w.c. Subtracting treats the signs as a difference in direction rather than two separate resistances. Averaging gives a number that is lower than the true load on the blower, and doubling the larger reading invents a pressure that was never measured.",
    "id": 150
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "A 3-ton system has 27,000 BTU per hour of sensible capacity and shows a 25 degree F temperature split. About what is the airflow?",
    "options": {
      "A": "About 1,200 CFM, found by assuming 400 CFM for each ton of capacity.",
      "B": "About 1,000 CFM, found from 27,000 divided by 1.08 times 25.",
      "C": "About 1,500 CFM, found from 27,000 divided by 18 degrees F.",
      "D": "About 720 CFM, found from 27,000 divided by 37.5 degrees F."
    },
    "answer": "B",
    "explanation": "Airflow equals sensible heat divided by 1.08 times the temperature split, which is 27,000 / 27, or 1,000 CFM. The 1,200 CFM figure is the design flow and does not use the measurement. The other two numbers use a temperature difference that was never measured, so they do not describe this system.",
    "id": 151
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "A technician finds a high temperature split, low suction pressure, normal superheat and a total external static of 0.95 in. w.c. What is the most likely cause?",
    "options": {
      "A": "A restricted airflow, such as a dirty filter or an undersized return.",
      "B": "A low refrigerant charge that has starved the evaporator of liquid.",
      "C": "A failed condenser fan that has raised the head pressure above normal.",
      "D": "A TXV that has lost the charge in its bulb and closed fully."
    },
    "answer": "A",
    "explanation": "High static pressure with a wide split and normal superheat means too little air is crossing the coil, which drops the coil temperature and suction pressure. Low charge would produce high superheat. A failed condenser fan raises head pressure and does not raise duct static. A dead TXV bulb gives high superheat as well. Only the airflow restriction fits all four readings.",
    "id": 152
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "What is the primary reason that doubling a blower's speed is a poor way to fix a duct restriction?",
    "options": {
      "A": "The static pressure would fall by half, which worsens the restriction.",
      "B": "The airflow would rise only slightly, and the power would fall.",
      "C": "The airflow would double, but the power would rise about eightfold.",
      "D": "The blower would stop moving air when it exceeded the rated speed."
    },
    "answer": "C",
    "explanation": "By the fan laws, airflow doubles with speed, but power rises with the cube, so a doubling costs eight times the power. Airflow does not rise only slightly. Static pressure rises with the square of speed, not falls. A blower does not stop moving air at a higher speed, although motors may overheat, and the result is waste rather than a halt.",
    "id": 153
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "What friction rate results from 0.30 in. w.c. available for ducts over a longest equivalent run of 200 feet?",
    "options": {
      "A": "0.06 in. w.c. per 100 feet, found by dividing 0.30 by 500.",
      "B": "1.50 in. w.c. per 100 feet, found by multiplying 0.30 by the 200 feet and 25.",
      "C": "0.60 in. w.c. per 100 feet, found by multiplying 0.30 by 200 then dividing by 100.",
      "D": "0.15 in. w.c. per 100 feet, found from 0.30 divided by 200 times 100."
    },
    "answer": "D",
    "explanation": "Friction rate equals available pressure divided by the longest equivalent length, multiplied by 100, so 0.30 / 200 x 100 is 0.15 in. w.c. per 100 feet. Dividing by 500 uses a length that is not given. Multiplying the pressure by the length reverses the relation. A rate of 1.50 would be far too high for a quiet residential duct.",
    "id": 154
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "Why are supply ducts in a hot attic insulated and wrapped with a vapor barrier?",
    "options": {
      "A": "To make the air inside the duct warmer than the attic air outside it.",
      "B": "To keep the outer surface above the dew point and cut heat gain.",
      "C": "To raise the static pressure so the air reaches the farthest room faster.",
      "D": "To block refrigerant from leaking out of the duct through its seams."
    },
    "answer": "B",
    "explanation": "Insulation cuts heat gain through the wall and keeps the outer surface above the dew point of the humid attic, which prevents sweating and dripping. The goal is cold supply air at the registers, not warm air. Insulation does not raise static pressure. Refrigerant stays in the copper lines and never enters the air ducts.",
    "id": 155
  },
  {
    "domain": "air_side",
    "chapter": 16,
    "question": "Which practice gives the most accurate average velocity in a duct?",
    "options": {
      "A": "Take several readings across the duct in a traverse and average them.",
      "B": "Take one reading near the wall, where the air is most stable and steady.",
      "C": "Take one reading at the center of the duct, where the air moves the fastest.",
      "D": "Take a reading at the register and multiply by the number of registers."
    },
    "answer": "A",
    "explanation": "Air moves faster at the center than near the walls, so a traverse of several points across the duct, averaged, gives the best estimate of mean velocity. A single center reading is too high. A single wall reading is too low because friction slows the air there. Register readings reflect each branch separately and cannot be multiplied to give the trunk flow.",
    "id": 156
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A 240 volt electric heater element measures 16 ohms with power off. Using Ohm's law, what current will the element draw when energized?",
    "options": {
      "A": "3,840 amps, found by multiplying the voltage by the measured resistance",
      "B": "0.067 amp, found by dividing the element resistance by the supplied line voltage",
      "C": "15 amps, found by dividing the supplied voltage by the element resistance",
      "D": "256 amps, found by squaring the resistance and then dividing by the amps"
    },
    "answer": "C",
    "explanation": "Current equals voltage divided by resistance, so 240 divided by 16 gives 15 amps. Multiplying voltage by resistance gives a meaningless 3,840 figure that is not a current at all. Dividing resistance by voltage inverts the formula and gives a tiny number of about 0.067. Squaring the voltage and dividing by amps mixes up the power formula and does not give current.",
    "id": 157
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A control transformer is rated 40 VA with a 24 volt secondary. What is the maximum secondary current it can supply without being overloaded?",
    "options": {
      "A": "1.67 amps, found by dividing the volt-amp rating by the secondary voltage",
      "B": "0.60 amp, found by dividing the secondary voltage by the volt-amp rating",
      "C": "16.7 amps, found by multiplying the rating by the primary turns ratio",
      "D": "960 amps, found by multiplying the volt-amp rating by the secondary voltage"
    },
    "answer": "A",
    "explanation": "Volt-amps divided by volts gives amps, so 40 divided by 24 equals 1.67 amps. Dividing the secondary voltage by the rating inverts the relationship and gives 0.60, which understates the capacity. Multiplying by a turns ratio has no basis for a secondary current limit and would give an absurd 16.7. Multiplying the rating by the voltage gives 960, a number with no meaning as a current limit and far beyond anything the small transformer could supply.",
    "id": 158
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A three-phase supply measures 238, 232 and 230 volts between the phase pairs. What is the approximate voltage imbalance, and what is the guidance?",
    "options": {
      "A": "About 2.0 percent, which is at the common limit and worth correcting",
      "B": "About 8.0 percent, which is severe and demands immediate unit shutdown",
      "C": "About 0.5 percent, which is so small that it can be ignored",
      "D": "About 4.7 percent, which is acceptable because it is under five percent"
    },
    "answer": "A",
    "explanation": "The average is 233.3 volts, the greatest deviation is 4.7 volts, and 4.7 divided by 233.3 times 100 equals about 2.0 percent, right at the usual rule-of-thumb ceiling. An 8 percent figure results from dividing by the wrong base and would call for far more urgent action than is warranted. A 0.5 percent value is an arithmetic slip. Reporting 4.7 percent confuses the deviation in volts with the percentage, and there is no five percent allowance rule for motors.",
    "id": 159
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A condensing unit nameplate lists a compressor RLA of 20.0 amps, a fan motor of 2.0 amps, and no other loads. What is the MCA?",
    "options": {
      "A": "22.0 amps, by simply adding the compressor and fan amps together as printed",
      "B": "25.0 amps, by taking 125 percent of the compressor amps and ignoring the fan",
      "C": "27.5 amps, by taking 125 percent of both motor loads added together",
      "D": "27.0 amps, by taking 125 percent of the compressor plus the fan load"
    },
    "answer": "D",
    "explanation": "MCA is 125 percent of the largest motor load plus all other loads, so 1.25 times 20.0 is 25.0, plus the 2.0 amp fan gives 27.0 amps. Simply adding the two loads yields 22.0 and skips the safety margin on the largest motor. Taking 125 percent of the compressor alone gives 25.0 and leaves out the fan. Multiplying both loads by 125 percent gives 27.5, which applies the margin to a load that the rule leaves at its actual value.",
    "id": 160
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A technician measures current on a 240 volt condensing unit by clamping the meter around the entire cable that holds both hot conductors. What reading should be expected?",
    "options": {
      "A": "Near the full load current, because both conductors carry the same current",
      "B": "Double the load current, because the two conductors each carry current",
      "C": "Near zero, because the opposing currents cancel the magnetic fields",
      "D": "The line voltage, because the clamp senses the field of both wires"
    },
    "answer": "C",
    "explanation": "A clamp meter senses the net magnetic field. In a two-wire single-phase circuit the currents flow in opposite directions, so the fields cancel and the meter reads close to zero. Reading full load current is only true when a single conductor is clamped. Doubling the current is a misunderstanding of how the field adds. The meter in amp mode does not display voltage at all, so reading line voltage is not a possible result.",
    "id": 161
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "Two 30 ohm resistive heating elements are connected in parallel across a 240 volt supply. What is the total current drawn by both elements?",
    "options": {
      "A": "8 amps, because the line current equals the current in a single element",
      "B": "16 amps, because each element draws 8 amps and the branch currents add",
      "C": "4 amps, because parallel circuits divide the current equally among branches",
      "D": "32 amps, because each element draws 16 amps at a 15 ohm resistance"
    },
    "answer": "B",
    "explanation": "Each branch sees the full 240 volts, so each draws 240 divided by 30 equals 8 amps, and the line carries 16 amps. Stating that the line current equals one element is true only for a series circuit. The divide-equally idea mistakenly splits a single current, when parallel branches each draw their own. The 32 amp figure wrongly pairs a combined resistance of 15 ohms with a doubling of current, counting the elements twice.",
    "id": 162
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A 230 volt unit is measured at 205 volts while running. The unit measured 240 volts before it started. What does this most likely indicate?",
    "options": {
      "A": "A failed compressor winding that has shorted turns inside the motor",
      "B": "A voltage drop from a loose connection or undersized supply wiring",
      "C": "A refrigerant overcharge that is raising the compressor current draw",
      "D": "A normal reading that requires no investigation because it is above 200"
    },
    "answer": "B",
    "explanation": "A fall of 35 volts under load, about 14.6 percent, points to excess resistance somewhere in the supply path, such as a bad lug or small wire, and it is below the plus or minus 10 percent limit of 207 volts. A shorted winding raises current but does not pull the supply voltage that far down at the source. Refrigerant charge does not change supply voltage. Anything under 207 volts on a 230 volt unit is outside tolerance, so accepting it is wrong.",
    "id": 163
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "A heat strip is rated 10 kW at 240 volts. How many BTU per hour of heat does it deliver, and what current does it draw?",
    "options": {
      "A": "34,120 BTU per hour of heat while drawing 41.7 amps",
      "B": "10,000 BTU per hour of heat while drawing 41.7 amps",
      "C": "34,120 BTU per hour of heat while drawing 24.0 amps",
      "D": "3,412 BTU per hour of heat while drawing 4.17 amps"
    },
    "answer": "A",
    "explanation": "One kilowatt equals 3,412 BTU per hour, so 10 kW gives 34,120. Current is power divided by voltage, 10,000 divided by 240 equals 41.7 amps. Saying 10,000 BTU confuses watts with BTU per hour. Quoting 24 amps reverses the division and divides the voltage by the kilowatt figure. Giving 3,412 BTU treats the heater as 1 kW, an error that drops the factor of ten from the rating.",
    "id": 164
  },
  {
    "domain": "electrical",
    "chapter": 17,
    "question": "Before measuring the resistance of a contactor coil with an ohmmeter, what must the technician do first, and why?",
    "options": {
      "A": "Leave power on so the meter can borrow the circuit voltage as its test source",
      "B": "Short the coil leads together first so any stored charge can drain off safely",
      "C": "Switch the meter to its highest AC voltage range for the coil's protection",
      "D": "Remove power and isolate the coil, because live voltage can damage the meter"
    },
    "answer": "D",
    "explanation": "An ohmmeter supplies its own small test voltage and gives a false reading, or is damaged, if the circuit is energized or other parallel paths remain. Leaving power on is the opposite of correct practice. Shorting coil leads is unnecessary for a coil and unsafe on an energized circuit. A high AC voltage range is used to check that the circuit is dead, not for making a resistance measurement.",
    "id": 165
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A dual run capacitor is labeled 45/5 µF ±6 percent. Which measured value for the compressor section indicates the capacitor is still acceptable?",
    "options": {
      "A": "38.5 µF, which is about 14 percent below the printed rating on the label",
      "B": "42.0 µF, which falls just under the lower tolerance limit of the label",
      "C": "49.5 µF, which falls well above the upper tolerance limit of the label",
      "D": "44.0 µF, which falls inside the allowed 42.3 to 47.7 µF range"
    },
    "answer": "D",
    "explanation": "Six percent of 45 is 2.7, so the allowed range is 42.3 to 47.7 µF and 44.0 fits inside it. A reading of 38.5 is far too low. A reading of 42.0 is only a hair under the limit but still fails the stated tolerance. A reading of 49.5 exceeds the upper limit of 47.7, so the capacitor has drifted high and is out of specification.",
    "id": 166
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A technician measures a single-phase compressor winding and finds C to S 4.0 ohms, C to R 1.5 ohms, and S to R 5.5 ohms. What does this indicate?",
    "options": {
      "A": "The winding is open between the start and run terminals",
      "B": "The readings are consistent, because 1.5 plus 4.0 equals 5.5 ohms",
      "C": "The run winding is shorted, because it reads the lowest resistance",
      "D": "The winding is grounded, because every reading is above one ohm"
    },
    "answer": "B",
    "explanation": "In a healthy single-phase winding, the two smaller readings add up to the largest one, and 1.5 plus 4.0 gives 5.5. An open winding would read infinite on at least one pair. The run winding normally has the lowest resistance, so that reading is expected and not a short. A grounded winding is found by reading from a terminal to the shell, not by values above one ohm.",
    "id": 167
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A 4-pole induction motor runs on 60 hertz power. What is its synchronous speed, and what full-load speed is typical?",
    "options": {
      "A": "3,600 rpm synchronous, and about 3,450 rpm under full load",
      "B": "1,800 rpm synchronous, and about 1,725 rpm under full load",
      "C": "1,200 rpm synchronous, and about 1,075 rpm under full load",
      "D": "900 rpm synchronous, and about 850 rpm under full load"
    },
    "answer": "B",
    "explanation": "Using 120 times 60 divided by 4 poles gives 1,800 rpm, and slip lowers the loaded speed to roughly 1,725. The 3,600 rpm values describe a 2-pole motor, the 1,200 rpm values a 6-pole motor, and the 900 rpm values an 8-pole motor, so each corresponds to the wrong number of poles for the machine described.",
    "id": 168
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "What is the correct way to discharge a run capacitor before testing it after the power has been locked out?",
    "options": {
      "A": "Touch an insulated screwdriver across both terminals to drain the stored charge quickly",
      "B": "Wait one minute with the power off and assume the stored charge has leaked away",
      "C": "Connect a resistor of about 20,000 ohms across the terminals with insulated leads",
      "D": "Ground one terminal to the cabinet and leave the other terminal floating free"
    },
    "answer": "C",
    "explanation": "A resistor of several thousand ohms, rated at 2 watts or more, drains the charge gradually without a spark. A screwdriver creates an arc that can pit terminals and injure the technician. Waiting one minute is unreliable because many capacitors hold a charge far longer. Grounding only one terminal does not complete a discharge path across the capacitor plates.",
    "id": 169
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A compressor draws 16.5 amps against a nameplate RLA of 14.0 amps, and supply voltage is normal. Which cause should be checked first?",
    "options": {
      "A": "A weak run capacitor or high head pressure from a dirty condenser coil",
      "B": "A thermostat setpoint that was lowered by two degrees below the room temperature",
      "C": "A return air filter that is slightly cleaner than the one installed last year",
      "D": "A contactor coil resistance reading of 60 ohms on a 24 volt coil"
    },
    "answer": "A",
    "explanation": "Current 18 percent above RLA with good voltage points to a mechanical or electrical load on the compressor, most often a weak run capacitor or high condensing pressure. A thermostat setpoint does not change the nameplate current relationship. A cleaner filter reduces load, not increases it. A coil resistance of 60 ohms is normal for a 24 volt coil and is unrelated to the compressor current.",
    "id": 170
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A contactor is closed and the load is running. A voltmeter placed across one closed pole, from line to load terminal, reads 4.5 volts. What does this show?",
    "options": {
      "A": "The contact is healthy because some voltage drop is always expected",
      "B": "The coil voltage is too high and is burning the contact surface",
      "C": "The load side of the circuit is shorted and drawing no current",
      "D": "The contact is pitted or burned and has excess resistance"
    },
    "answer": "D",
    "explanation": "Closed, clean contacts should drop well under 0.5 volt, so 4.5 volts means resistance across the contact that wastes power as heat. Saying some drop is expected is true, but not several volts. Coil voltage affects the pull-in force, not a voltage reading across the closed contacts. A short on the load side would draw heavy current and read a different pattern, not a modest drop.",
    "id": 171
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A motor nameplate shows 1/3 hp output and 62 percent efficiency. Approximately how many watts of electrical input does the motor draw? (1 hp = 746 W)",
    "options": {
      "A": "About 155 watts, found by multiplying output watts by efficiency",
      "B": "About 249 watts, found by treating output as a full 1/3 of 746",
      "C": "About 401 watts, found by dividing output watts by the efficiency",
      "D": "About 462 watts, found by adding the efficiency percentage to output"
    },
    "answer": "C",
    "explanation": "Output is 746 divided by 3, or 248.7 watts, and input equals output divided by efficiency: 248.7 divided by 0.62 gives about 401 watts. Multiplying by efficiency produces a number smaller than the output, which cannot be right. Using the output alone ignores motor losses. Adding the efficiency percentage as a number mixes units and has no physical basis.",
    "id": 172
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "Why can a replacement capacitor have a higher voltage rating than the original, but never a lower one?",
    "options": {
      "A": "A higher voltage rating always gives a larger capacitance and a much stronger motor start",
      "B": "A higher voltage rating always lowers the operating temperature of the motor windings",
      "C": "A lower voltage rating would raise the measured microfarads above the value on the label",
      "D": "A higher voltage rating gives more insulation margin, while a lower one can fail"
    },
    "answer": "D",
    "explanation": "The voltage rating is the maximum the dielectric can safely withstand, so a higher rating just adds margin and a lower rating risks breakdown and failure. The microfarad value is independent of the voltage rating. Voltage rating has no direct effect on motor temperature. Lowering the voltage rating does not raise capacitance, it only reduces safety margin and invites rupture.",
    "id": 173
  },
  {
    "domain": "electrical",
    "chapter": 18,
    "question": "A compressor with an RLA of 12.0 amps has an LRA of 64 amps. About how many times its running current is the starting current?",
    "options": {
      "A": "About 5.3 times, found by dividing the LRA by the RLA",
      "B": "About 0.19 times, found by dividing the RLA by the LRA",
      "C": "About 76 times, found by adding the RLA to the LRA",
      "D": "About 768 times, found by multiplying the RLA by the LRA"
    },
    "answer": "A",
    "explanation": "Dividing 64 by 12 gives about 5.3, which is in the usual 4 to 6 range for compressors. Dividing the other way gives the fraction 0.19, which would imply starting current smaller than running current. Adding the two values gives 76 amps, a meaningless sum. Multiplying them gives 768, which has no meaning as a ratio of starting to running current.",
    "id": 174
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "A technician measures across a pressure switch in the contactor coil circuit and reads 24.5 volts. What does this reading indicate?",
    "options": {
      "A": "The switch contacts are open, so the supply voltage appears across the gap",
      "B": "The switch contacts are closed and carrying the full coil current normally",
      "C": "The coil is shorted, so the switch sees the entire transformer output",
      "D": "The transformer is overloaded, so the switch shows an unusually high voltage"
    },
    "answer": "A",
    "explanation": "Across an open switch, no current flows, so the whole supply voltage appears across the gap and the meter reads about 24 volts. A closed switch has almost no resistance and reads close to zero volts across it. A shorted coil would draw heavy current and pull the whole circuit down, not place the full supply across the switch. An overloaded transformer would lower the output voltage, not raise the reading.",
    "id": 175
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "A thermostat wire for a cooling call is connected to which terminal, and what does it energize?",
    "options": {
      "A": "The G terminal, which energizes the outdoor condenser fan directly",
      "B": "The W terminal, which energizes the outdoor contactor coil directly",
      "C": "The O terminal, which energizes the indoor blower relay on its own",
      "D": "The Y terminal, which energizes the outdoor contactor coil circuit"
    },
    "answer": "D",
    "explanation": "Y is the cooling call and carries 24 volts through the safety switches to the contactor coil. G calls for the indoor blower, not the outdoor fan. W is the heating call and drives the furnace control. O or B sets the reversing valve on a heat pump and does not run a blower relay by itself.",
    "id": 176
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "A system has a 40 VA transformer. Loads are a contactor at 0.2 A, a gas valve at 0.6 A, a relay at 0.15 A, and two zone dampers at 0.5 A each. What is the result?",
    "options": {
      "A": "The load is 0.95 amp, 22.8 VA, which is well within the rating",
      "B": "The load is 1.95 amps, 46.8 VA, which is within the transformer rating",
      "C": "The load is 1.95 amps, 46.8 VA, which exceeds the transformer rating",
      "D": "The load is 3.45 amps, 82.8 VA, which exceeds the transformer rating"
    },
    "answer": "C",
    "explanation": "Total current is 0.2 + 0.6 + 0.15 + 1.0 = 1.95 amps, and 1.95 × 24 is 46.8 VA, above 40 VA, so the transformer is overloaded. Stating that 46.8 VA is within a 40 VA rating is a comparison error. The 0.95 amp figure leaves out the two dampers. The 3.45 amp figure double counts the damper current.",
    "id": 177
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "Why is a ladder diagram drawn with loads on the right and switches on the left?",
    "options": {
      "A": "Loads placed on the left would draw more current than loads on the right",
      "B": "A switch placed after the load would leave the load connected to power",
      "C": "Loads on the right keep the voltage lower for the switches that follow",
      "D": "Standard drafting software cannot draw a switch to the right of a coil"
    },
    "answer": "B",
    "explanation": "If a switch sits between a load and the return side, opening the switch still leaves the load side connected to the supply, so the part stays energized and dangerous. Position within a rung does not change current. Loads on the right do not lower the switch voltage. The layout is a standard practice for safety and readability and has nothing to do with software limits.",
    "id": 178
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "An 18 AWG thermostat cable measures 6.4 ohms per 1,000 feet. The thermostat is 150 feet from the unit. What is the loop resistance of both conductors?",
    "options": {
      "A": "About 0.96 ohm, found by treating one 150 foot conductor as the loop",
      "B": "About 1.92 ohms, found by using the 300 foot round trip distance",
      "C": "About 9.6 ohms, found by multiplying the 150 feet by the ohms per foot incorrectly",
      "D": "About 3.84 ohms, found by using twice the 300 foot round trip distance"
    },
    "answer": "B",
    "explanation": "Current travels out on one wire and back on another, so the loop is 300 feet, and 6.4 × 300 ÷ 1,000 equals 1.92 ohms. Using only 150 feet halves the answer. The 9.6 figure puts the decimal point in the wrong place. Doubling the round trip a second time to 600 feet counts the same wires twice.",
    "id": 179
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "A high-pressure switch opens at 610 psig on an R-410A system. Which condition is the LEAST likely cause of the switch opening?",
    "options": {
      "A": "A seized condenser fan motor reducing air across the coil",
      "B": "A condenser coil blocked with cottonwood seed and dirt",
      "C": "A refrigerant overcharge that backs liquid up into the condenser",
      "D": "A dirty indoor air filter that lowers the suction pressure"
    },
    "answer": "D",
    "explanation": "A dirty indoor filter reduces airflow across the evaporator, which tends to lower suction pressure and head pressure, not raise it. The other three causes all reduce heat rejection or add to the condenser's load, and push head pressure up toward the cutout. A seized fan, a blocked coil and an overcharge are classic causes of a high-pressure trip.",
    "id": 180
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "In a mechanical thermostat, the heat anticipator is set too low for the control circuit current. What is the most likely symptom?",
    "options": {
      "A": "The furnace cycles on and off too often, shortening each cycle",
      "B": "The furnace runs longer than needed and the room temperature overshoots",
      "C": "The thermostat will not close at all, so the furnace never starts",
      "D": "The blower runs continuously regardless of the setpoint and the call for heat"
    },
    "answer": "B",
    "explanation": "An anticipator set too low supplies too little early heat to the thermostat, so it turns the burner off late and the room overshoots. Short cycles come from an anticipator set too high. A closed contact is not prevented by the anticipator setting. Continuous blower operation is controlled by the fan switch, not by the anticipator.",
    "id": 181
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "Through the safety circuit, 24 volts reaches the contactor coil, but the contactor does not pull in and the coil reads 12 ohms. The nameplate says 24 volt coils read 70 to 100 ohms. What is the likely problem?",
    "options": {
      "A": "The coil has shorted turns and is drawing too much current",
      "B": "The coil is open, so no current passes through the winding",
      "C": "The thermostat has failed and sent an incorrect voltage",
      "D": "The contacts are welded, which prevents the coil from moving"
    },
    "answer": "A",
    "explanation": "A reading far below the normal range shows part of the winding is shorted, so the current would be excessive, the magnetic pull weak and the transformer stressed. An open coil would read infinite, not 12 ohms. A thermostat problem would show up as a missing 24 volts, but the voltage is present. Welded contacts do not change the coil resistance reading.",
    "id": 182
  },
  {
    "domain": "controls",
    "chapter": 19,
    "question": "A 3 amp fuse on the control board keeps blowing when the thermostat calls for cooling but not when it is off. What is the most likely cause?",
    "options": {
      "A": "A low-pressure switch that has opened and closed repeatedly during the call",
      "B": "A heat anticipator set slightly too high on the thermostat",
      "C": "A pinched wire grounding the Y circuit, or a shorted contactor coil",
      "D": "A defective crankcase heater drawing more current than normal"
    },
    "answer": "C",
    "explanation": "Because the fuse blows only when the Y circuit is energized, the fault lies in that circuit, such as a pinched wire touching ground or a coil shorted internally. An open switch makes the circuit open, so current would not rise. An anticipator setting is for the heating circuit. A crankcase heater runs on line voltage and is not fed from the 24 volt fuse.",
    "id": 183
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "A residential air conditioner is rated 42,000 BTU/hr of cooling. At 400 CFM per ton, how many tons is it, and what airflow is the target?",
    "options": {
      "A": "3.0 tons, with a target airflow of 1,200 CFM through the coil",
      "B": "3.5 tons, with a target airflow of 1,400 CFM through the coil",
      "C": "3.5 tons, with a target airflow of 1,680 CFM through the coil",
      "D": "4.2 tons, with a target airflow of 1,680 CFM through the coil"
    },
    "answer": "B",
    "explanation": "Dividing 42,000 by 12,000 gives 3.5 tons, and 3.5 times 400 equals 1,400 CFM. Saying 3 tons uses a rounded-down size and gives too little airflow. The 3.5 ton and 1,680 CFM pairing uses 480 CFM per ton, which is not the design figure. Calling the system 4.2 tons divides by 10,000, a wrong conversion that carries the error into the airflow figure.",
    "id": 184
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "A 3-ton system moves 1,200 CFM and has a return air temperature of 78°F and a supply air temperature of 58°F. What is the approximate sensible capacity?",
    "options": {
      "A": "About 15,552 BTU/hr, found by using a 12°F temperature split",
      "B": "About 36,000 BTU/hr, found by multiplying the system size by 12,000",
      "C": "About 60 BTU/hr, found by dividing the CFM by the temperature split",
      "D": "About 25,920 BTU/hr, found by multiplying 1.08 by CFM and by 20°F"
    },
    "answer": "D",
    "explanation": "The temperature split is 78 minus 58, which is 20°F, so 1.08 × 1,200 × 20 gives 25,920 BTU/hr. A 12°F split does not match the readings. The 36,000 value is total nameplate capacity and ignores the measured conditions. Dividing CFM by the split yields only 60, which is far too small and is not how capacity is calculated.",
    "id": 185
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "A system delivers 36,000 BTU/hr and draws 3,000 watts at the standard test condition. What is its EER?",
    "options": {
      "A": "12, found by dividing the BTU/hr output by the watts input",
      "B": "0.083, found by dividing the watts input by the BTU/hr output",
      "C": "108 million, found by multiplying BTU/hr output by the watts input",
      "D": "33,000, found by subtracting the watts input from the BTU/hr output"
    },
    "answer": "A",
    "explanation": "EER equals cooling output in BTU/hr divided by electrical input in watts, so 36,000 divided by 3,000 is 12. The inverse gives 0.083, which would mean almost no cooling per watt. Multiplying the two values gives a meaningless 108 million figure. Subtracting watts from BTU/hr combines unlike units and does not measure efficiency.",
    "id": 186
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "Why does a SEER2 rating usually come out lower than the SEER rating for the same equipment?",
    "options": {
      "A": "SEER2 measures only the hottest single day of the year instead of a whole season",
      "B": "SEER2 includes all of the electricity used by the home's lights and appliances",
      "C": "SEER2 is tested with higher duct static pressure, which is more realistic",
      "D": "SEER2 removes the effect of outdoor temperature from the whole seasonal calculation"
    },
    "answer": "C",
    "explanation": "SEER2 testing applies a higher external static pressure, which better reflects real ducts and lowers the numeric result by a few percent. It is still a seasonal rating, not a single hot day. It does not count other household electricity. It continues to account for a range of outdoor temperatures.",
    "id": 187
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "An R-410A system with a thermostatic expansion valve shows a saturation temperature of 42°F at suction pressure and a suction line temperature of 52°F. What is the superheat?",
    "options": {
      "A": "94°F, found by adding the two temperature values together as one total",
      "B": "42°F, found by taking only the saturation temperature at the suction pressure",
      "C": "52°F, found by taking only the measured suction line temperature at the service valve",
      "D": "10°F, found by subtracting the saturation temperature from the line temperature"
    },
    "answer": "D",
    "explanation": "Superheat equals suction line temperature minus the saturation temperature at suction pressure, so 52 minus 42 equals 10°F. Adding the values gives a number with no physical meaning. Reporting just the saturation temperature or just the line temperature gives a single temperature, not the difference that defines superheat.",
    "id": 188
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "A system has a saturation temperature of 108°F at the liquid line pressure and a measured liquid line temperature of 98°F. What is the subcooling?",
    "options": {
      "A": "206°F, found by adding the two temperature values together",
      "B": "10°F, found by subtracting the liquid temperature from the saturation temperature",
      "C": "Minus 10°F, found by subtracting the saturation temperature from the liquid temperature",
      "D": "98°F, found by taking only the measured liquid line temperature"
    },
    "answer": "B",
    "explanation": "Subcooling is saturation temperature at liquid pressure minus liquid line temperature, so 108 minus 98 is 10°F. Reversing the subtraction produces a negative 10, which would wrongly imply the liquid is not subcooled at all. Adding the temperatures is meaningless. Using the line temperature alone omits the saturation reference.",
    "id": 189
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "Which statement about the condensate drain line of a residential air conditioner is correct?",
    "options": {
      "A": "It should run perfectly level so that water sits in the line and keeps it clean",
      "B": "It should be vented back into the supply duct so that it can remove excess moisture",
      "C": "It should slope downward and include a trap, with a safety float switch or pan",
      "D": "It needs no trap because condensate always flows freely out of the coil by gravity"
    },
    "answer": "C",
    "explanation": "A drain must slope downward, commonly at least 1/8 inch per foot, and a trap controls airflow through the line, while a secondary pan or float switch protects the building if the line clogs. A level line lets water and slime collect. Venting into the supply duct would spread moisture and contamination. The trap is needed because air pressure in the cabinet would otherwise push or pull air through the drain.",
    "id": 190
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "A fixed-piston R-410A system has high superheat, low subcooling, low suction pressure and low head pressure, with normal airflow. What is the most likely cause?",
    "options": {
      "A": "An undercharge from a refrigerant leak somewhere in the sealed system",
      "B": "An overcharge that has flooded the condenser with excess liquid",
      "C": "A condenser coil that is badly blocked and cannot reject any heat",
      "D": "A return air filter that is completely blocked and restricting airflow"
    },
    "answer": "A",
    "explanation": "Low pressures on both sides with high superheat and low subcooling indicate too little refrigerant in the system. An overcharge raises subcooling and head pressure. A blocked condenser raises head pressure and usually lowers superheat. A blocked filter reduces airflow, but the stem states that airflow is normal, and it tends to lower suction pressure with a low superheat.",
    "id": 191
  },
  {
    "domain": "systems",
    "chapter": 20,
    "question": "Why is the suction line of a split system insulated, while the liquid line is usually left bare?",
    "options": {
      "A": "The suction line is cold and would sweat and gain heat if bare",
      "B": "The liquid line is hotter than the suction line and needs room to cool",
      "C": "The suction line must stay warm so the compressor receives dry vapor",
      "D": "The liquid line carries vapor, which would condense inside if it were insulated"
    },
    "answer": "A",
    "explanation": "The cold suction line collects condensation from the air and picks up heat from its surroundings, which wastes capacity and can cause damage, so it is insulated. The liquid line is warm and extra loss of heat there is harmless, and it does not need to cool further through the wall. Insulating the suction line does not warm the vapor. The liquid line carries liquid, not vapor, and insulation does not make it condense.",
    "id": 192
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "A heat pump in the heating mode is delivering 24,000 BTU/hr while drawing 2.2 kW. What is its approximate coefficient of performance at that point?",
    "options": {
      "A": "About 2.1, found by dividing the output by 11,000 BTU/hr of input",
      "B": "About 3.2, because 2,200 watts converts to about 7,500 BTU/hr of input",
      "C": "About 4.9, found by dividing the output directly by the 2.2 kilowatts",
      "D": "About 1.0, because every heating device delivers as much heat as it uses"
    },
    "answer": "B",
    "explanation": "Input of 2.2 kW equals 2,200 x 3.412 = 7,506 BTU/hr, and 24,000 divided by 7,506 gives about 3.2. Dividing by 11,000 BTU/hr uses an input figure that matches no part of the problem. Dividing BTU/hr by kilowatts without converting units mixes two different units and does not produce a COP. A value of 1.0 describes resistance heat, while a working heat pump delivers several times its electrical input.",
    "id": 193
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "Which description correctly identifies the reversing valve's compressor discharge connection and the location of the suction connection on the valve body?",
    "options": {
      "A": "Discharge is the single port on one side, and suction is the center of three",
      "B": "Discharge is the center of three ports, and suction is the single port on the opposite side",
      "C": "Discharge is one outer port of three, and suction is the single port opposite it",
      "D": "Both discharge and suction share the single port, and the three ports are for coils"
    },
    "answer": "A",
    "explanation": "The single port on its own side takes hot discharge gas from the compressor, and the center of the three ports on the opposite side is the suction return. Reversing those roles would send discharge gas straight back to the suction side. The outer ports always connect to the indoor and outdoor coils, so they cannot be discharge or suction, and the valve never merges both pressures at one port.",
    "id": 194
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "A technician finds a heat pump stuck in cooling mode during winter. The thermostat calls for heat, the solenoid coil shows 24 volts when energized, and the coil resistance is normal. What is the most likely cause?",
    "options": {
      "A": "The outdoor fan motor capacitor has dropped to a lower microfarad rating than printed",
      "B": "The filter drier has become restricted and is starving the outdoor metering device",
      "C": "The thermostat is wired to the aux heat terminal and is bypassing the compressor",
      "D": "The valve slide is mechanically stuck or cannot shift due to low pressure difference"
    },
    "answer": "D",
    "explanation": "With proper voltage and a good coil, the pilot is being commanded correctly, so the remaining suspects are a jammed slide or too small a pressure difference to move the piston, as in a low charge or weak compressor. A weak fan capacitor affects outdoor airflow and would not lock the system in cooling. A restricted drier affects flow and pressures but does not keep the valve in one position. A thermostat wired to the auxiliary terminal would run strips rather than hold the cooling mode.",
    "id": 195
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "A house loses 667 BTU/hr per degree F below 65 degrees F outside. A heat pump delivers 20,000 BTU/hr at 25 degrees F. How much auxiliary heat is needed at that temperature?",
    "options": {
      "A": "About 6,700 BTU/hr, because the house loss exceeds the heat pump output",
      "B": "About 1,300 BTU/hr, because only the extra 2 degrees of difference count",
      "C": "About 0 BTU/hr, because the heat pump output is close to the house loss",
      "D": "About 26,700 BTU/hr, because the auxiliary heat must carry the entire load"
    },
    "answer": "A",
    "explanation": "Heat loss at 25 degrees F is 667 x (65 - 25) = 667 x 40 = 26,680 BTU/hr. Subtracting the 20,000 BTU/hr the heat pump delivers leaves about 6,700 BTU/hr for the strips. The 1,300 figure uses a temperature difference that does not exist in the problem. A shortfall of zero ignores a gap of one third of the load. Asking the strips to carry all 26,700 BTU/hr forgets that the compressor is still delivering 20,000.",
    "id": 196
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "During a defrost cycle on a properly operating heat pump, what should the outdoor fan and the auxiliary heat strips be doing?",
    "options": {
      "A": "The outdoor fan runs at high speed and the indoor strips remain off",
      "B": "The outdoor fan is off and the indoor strips come on to temper air",
      "C": "The outdoor fan is off and the indoor blower stops until defrost ends",
      "D": "The outdoor fan runs at low speed and strips are locked out entirely"
    },
    "answer": "B",
    "explanation": "In defrost the valve shifts to cooling mode, so the outdoor coil gets hot gas and the fan stops so the heat melts the frost instead of blowing away. The indoor coil is briefly acting as an evaporator, so the strips are brought on to warm the air. Running the outdoor fan would carry off the melting heat, stopping the indoor blower would let the coil freeze, and locking out strips would deliver cold air to the home.",
    "id": 197
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "A technician measures R-410A heating-mode suction pressure of 78 psig with a suction line temperature at the compressor of 36 degrees F. The saturation temperature at 78 psig is about 20 degrees F. What is the superheat?",
    "options": {
      "A": "56 degrees F, found by adding the saturation temperature to the line temperature",
      "B": "20 degrees F, because superheat always equals the saturation temperature reading",
      "C": "4 degrees F, found by subtracting the line temperature from the pressure reading",
      "D": "16 degrees F, found by subtracting saturation temperature from line temperature"
    },
    "answer": "D",
    "explanation": "Superheat is the measured suction line temperature minus the saturation temperature at suction pressure: 36 - 20 = 16 degrees F. Adding the two values has no physical meaning. Superheat is not equal to the saturation temperature, which is just a point on the pressure-temperature chart, and a pressure in psig cannot be subtracted from a temperature in degrees.",
    "id": 198
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "Why must the filter drier in a heat pump liquid line be rated for bi-directional flow?",
    "options": {
      "A": "The drier must absorb more water when the outdoor coil acts as the condenser",
      "B": "Heat pump refrigerants carry more oil that must be filtered in both directions",
      "C": "Refrigerant flows through the liquid line in opposite directions in each mode",
      "D": "A bi-flow drier is the only type that physically fits on the larger vapor line"
    },
    "answer": "C",
    "explanation": "Liquid moves toward the indoor coil in cooling and toward the outdoor coil in heating, so a one-way drier would release trapped debris backward when flow reverses. Water absorption does not depend on which coil is the condenser. Oil loading is not the reason for the rating, and bi-flow driers belong on the liquid line, not the vapor line.",
    "id": 199
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "In the 2023 efficiency rating change, why are SEER2 numbers typically lower than the older SEER numbers for the same equipment?",
    "options": {
      "A": "The newer rating counts the standby power of the thermostat in the total",
      "B": "The newer test lowers the outdoor temperatures at which cooling is measured",
      "C": "The newer test uses a higher duct external static pressure during rating",
      "D": "The newer rating drops the part-load points that favored variable-speed machines"
    },
    "answer": "C",
    "explanation": "The updated test procedure applies a higher external static pressure to the blower, which makes the equipment work harder and gives lower rated numbers. Thermostat standby power is not part of the rating. The outdoor temperature points were not lowered to penalize cooling, and part-load points were not dropped; variable-speed systems are still tested at multiple speeds.",
    "id": 200
  },
  {
    "domain": "systems",
    "chapter": 21,
    "question": "A 15 kW electric strip set is installed in an air handler on a 240 volt single-phase circuit. What is the approximate current draw with all strips on?",
    "options": {
      "A": "About 31 amps, because 15,000 divided by 480 gives the line current",
      "B": "About 62.5 amps, because 15,000 watts divided by 240 volts is current",
      "C": "About 36 amps, because 15,000 divided by 416 is used for single-phase loads",
      "D": "About 125 amps, because the current doubles for a purely resistive heater"
    },
    "answer": "B",
    "explanation": "Current equals power divided by voltage for a resistive load: 15,000 / 240 = 62.5 amps. Dividing by 480 or 416 uses voltages that do not apply to a 240 volt single-phase circuit, and resistance heaters do not double their current. Because that amperage is large, the strips are normally split across multiple branch circuits with separate breakers.",
    "id": 201
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "A natural gas furnace rated at 100,000 BTU/hr input is clocked with a one-cubic-foot dial taking 40 seconds per revolution. Assuming 1,000 BTU per cubic foot, what is the input?",
    "options": {
      "A": "About 40,000 BTU/hr, found by multiplying the seconds by 1,000 BTU",
      "B": "About 144,000 BTU/hr, found by multiplying 3,600 by 40 seconds",
      "C": "About 90,000 BTU/hr, found by dividing 3,600 by 40 seconds",
      "D": "About 25,000 BTU/hr, found by dividing 1,000 BTU by 40 seconds"
    },
    "answer": "C",
    "explanation": "Cubic feet per hour equal 3,600 seconds divided by seconds per revolution, so 3,600 / 40 = 90 cubic feet per hour, and 90 x 1,000 gives 90,000 BTU/hr. Multiplying 3,600 by 40 inverts the relationship, since a longer time per revolution means less gas, not more. Multiplying the seconds by 1,000 and dividing 1,000 by the seconds both ignore the number of seconds in an hour.",
    "id": 202
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "An 80 percent AFUE furnace has a rated input of 90,000 BTU/hr. The measured temperature rise is 50 degrees F. About how much air is moving through it?",
    "options": {
      "A": "About 1,800 CFM, found by dividing the input by 50 degrees alone",
      "B": "About 1,670 CFM, found by dividing 90,000 by 1.08 and 50 degrees",
      "C": "About 1,070 CFM, found by applying the efficiency factor a second time",
      "D": "About 1,330 CFM, found by dividing 72,000 by 1.08 times 50"
    },
    "answer": "D",
    "explanation": "Output equals 90,000 x 0.80 = 72,000 BTU/hr. Then CFM = 72,000 / (1.08 x 50) = 72,000 / 54 = 1,333. Using the full input ignores the heat lost up the vent, which overstates the airflow. Dividing by the rise alone drops the 1.08 factor, and applying the AFUE a second time shrinks the output twice and produces an airflow that is too low.",
    "id": 203
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "A furnace's inducer runs but the igniter never glows and the gas valve never opens. Which component is the most likely cause of the stalled sequence?",
    "options": {
      "A": "A pressure switch that is not closing from a blocked vent or split tube",
      "B": "A flame sensor coated with a thin film of oxidation from earlier operation",
      "C": "A high limit switch that has opened because the blower filter is dirty",
      "D": "A thermostat anticipator that was set to the wrong current setting"
    },
    "answer": "A",
    "explanation": "After the inducer starts, the board waits for the pressure switch to prove the vent path before energizing the igniter. A blocked vent or split hose leaves it open. A dirty flame sensor only matters after the burners light. A limit that has opened is usually found after the burners have been running, and it leaves the blower on. A mis-set anticipator changes cycle length and does not interrupt the start-up sequence.",
    "id": 204
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "A 7.5 kW, 240 volt electric heater is connected to a 208 volt supply. What is its approximate power output at 208 volts?",
    "options": {
      "A": "About 7.5 kW, because resistance heaters keep their rated power at any voltage",
      "B": "About 5.6 kW, because power varies with the square of the voltage ratio",
      "C": "About 6.5 kW, because power varies directly with the voltage ratio",
      "D": "About 4.9 kW, because power varies with the cube of the voltage ratio"
    },
    "answer": "B",
    "explanation": "For a fixed resistance, power is proportional to voltage squared: 7.5 x (208 / 240) squared = 7.5 x 0.751 = 5.63 kW. The rated power is valid only at the rated voltage. Treating power as directly proportional to voltage gives 6.5 kW, which is too high. No heating element follows a cube relationship, so 4.9 kW is too low.",
    "id": 205
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "A technician finds a rollout switch tripped on a gas furnace. What is the correct response?",
    "options": {
      "A": "Reset the switch and return the furnace to service if it lights normally",
      "B": "Replace the rollout switch with a higher temperature rated part from stock",
      "C": "Find the cause of flame rollout, such as a blocked heat exchanger or vent",
      "D": "Raise the manifold pressure slightly so the flames burn farther back inside"
    },
    "answer": "C",
    "explanation": "A tripped rollout switch means flames or hot gases escaped the heat exchanger, which can come from a blocked exchanger, a blocked vent or poor combustion air. The cause must be found and corrected before restart. Simply resetting the part hides a hazard. A higher temperature part defeats the protective device, and raising manifold pressure increases flame size and makes rollout worse.",
    "id": 206
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "A 10 kW, 240 volt single-phase electric heater is on a continuous load circuit. Using the 125 percent rule, what minimum breaker size does the load call for?",
    "options": {
      "A": "A 40 amp breaker, because the heater draws about 41.7 amps",
      "B": "A 50 amp breaker, because 125 percent applies to the voltage",
      "C": "A 70 amp breaker, because two heaters are always assumed",
      "D": "A 60 amp breaker, because 41.7 x 1.25 is about 52 amps"
    },
    "answer": "D",
    "explanation": "Current is 10,000 / 240 = 41.7 amps. Multiplying by 1.25 gives 52.1 amps, and the next standard breaker size above that is 60 amps. A 40 amp breaker is below the load current. The 125 percent factor applies to current, not to the voltage, and nothing in the problem suggests a second heater, so 70 amps is oversized.",
    "id": 207
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "In a condensing gas furnace rated at 96 percent AFUE, why can plastic pipe be used for the vent?",
    "options": {
      "A": "The exhaust gas is cooled so far that it leaves quite cool",
      "B": "Plastic does not carry any combustion gases that contain moisture",
      "C": "The exhaust has no carbon monoxide because combustion is complete",
      "D": "The vent pipe is installed inside a metal chimney liner always"
    },
    "answer": "A",
    "explanation": "A second heat exchanger removes so much heat that exhaust leaves near 100 to 130 degrees F, cool enough for PVC or CPVC. The exhaust actually carries a lot of water vapor, which condenses into acidic liquid. Combustion is never perfectly complete, so carbon monoxide can still be present if something fails. Condensing furnaces are usually vented through the wall or roof without a chimney.",
    "id": 208
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "A hydronic loop carries 6 GPM and the water temperature drops by 20 degrees F across the baseboard. How much heat does it deliver?",
    "options": {
      "A": "About 6,000 BTU/hr, found by multiplying the GPM by the drop alone",
      "B": "About 60,000 BTU/hr, found by multiplying 500 by 6 and by 20",
      "C": "About 10,000 BTU/hr, found by dividing the GPM by 500 and by 20",
      "D": "About 2,400 BTU/hr, found by dividing the drop by the GPM and 500"
    },
    "answer": "B",
    "explanation": "Heat delivered is 500 x GPM x temperature difference: 500 x 6 x 20 = 60,000 BTU/hr. Multiplying only GPM and temperature drop leaves out the factor 500, which represents the weight and specific heat of water over an hour. Dividing by 500 or inverting any of the terms gives answers that are far too small.",
    "id": 209
  },
  {
    "domain": "systems",
    "chapter": 22,
    "question": "Which test is the best way to confirm that a gas furnace is producing dangerous levels of carbon monoxide?",
    "options": {
      "A": "Smell the supply registers for a faint odor that resembles burning material",
      "B": "Check whether the pilot flame in the burner box is yellow at the tip",
      "C": "Hold a mirror in the vent to see if moisture forms on the glass",
      "D": "Use a calibrated combustion analyzer at the flue and the register"
    },
    "answer": "D",
    "explanation": "Carbon monoxide has no smell, color or taste, so only an instrument can measure it. A yellow flame suggests poor combustion, but it does not give a number. A mirror shows moisture, which is normal in exhaust. Smelling the air gives a false sense of safety, because other odors may be present while the dangerous gas goes undetected.",
    "id": 210
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "A compressor motor with two poles is driven by an inverter at 45 hertz. Using 120 x frequency / poles, what is the speed in revolutions per minute?",
    "options": {
      "A": "5,400 rpm, found by multiplying 120 by 45 and leaving out the poles",
      "B": "1,350 rpm, found by dividing the 45 hertz frequency by two poles",
      "C": "3,600 rpm, because the inverter fixes the speed at 60 hertz",
      "D": "2,700 rpm, found by multiplying 120 by 45 and dividing by 2"
    },
    "answer": "D",
    "explanation": "Speed equals 120 x 45 / 2 = 2,700 rpm. Multiplying 120 by the frequency without dividing by the number of poles overstates the speed by a factor of two. Dividing the frequency by the poles alone omits the 120 factor. A speed of 3,600 rpm is the figure at 60 hertz, but the inverter's job is to change frequency to vary the speed.",
    "id": 211
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "A blower draws 600 watts at 1,200 CFM. Using fan affinity laws, about how much power does it draw when slowed to 600 CFM?",
    "options": {
      "A": "About 75 watts, because power changes with the cube of the speed",
      "B": "About 300 watts, because power changes in direct proportion with the speed",
      "C": "About 150 watts, because power changes with the square of the speed",
      "D": "About 600 watts, because a motor draws the same power at any speed"
    },
    "answer": "A",
    "explanation": "Halving the speed halves the airflow and divides the power by two cubed, which is eight: 600 / 8 = 75 watts. A direct proportion would give 300 watts, a square law would give 150 watts, and neither describes a fan. A motor's power draw falls with speed, which is the main reason variable speed blowers save energy.",
    "id": 212
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "A mini-split's factory charge covers 25 feet of line. The installed line is 55 feet and the manual lists 0.25 ounce per foot of added charge. How much refrigerant is added?",
    "options": {
      "A": "13.75 ounces, because the whole 55 feet of line is multiplied by the rate",
      "B": "6.25 ounces, because only 25 feet of line is multiplied by the rate",
      "C": "7.5 ounces, because only the extra 30 feet is multiplied by the rate",
      "D": "30 ounces, because the extra length in feet is added as ounces directly"
    },
    "answer": "C",
    "explanation": "Only the length beyond the factory-covered 25 feet needs added charge: (55 - 25) x 0.25 = 7.5 ounces. Multiplying the full 55 feet double counts the refrigerant already in the unit. Using only the 25 feet ignores the extra line. Adding feet as ounces ignores the per-foot rate in the manual.",
    "id": 213
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "What is the main purpose of the electronic expansion valve in an inverter mini-split compared with a fixed piston?",
    "options": {
      "A": "It lets the compressor run backward to defrost the outdoor coil",
      "B": "It adjusts refrigerant flow continuously to match speed and load",
      "C": "It removes moisture from the refrigerant before it enters the coil",
      "D": "It stores extra liquid refrigerant for use at the highest compressor speed"
    },
    "answer": "B",
    "explanation": "An EEV uses a stepper motor and sensor feedback to change the flow as speed and load change. Defrost is done by a reversing valve, not by running the compressor backward. Moisture removal is the job of a filter drier, and storing liquid is the job of a receiver or accumulator.",
    "id": 214
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "Before reaching into an inverter outdoor unit control compartment, which step should come first after switching off the disconnect?",
    "options": {
      "A": "Spray the capacitors with contact cleaner to remove any dust deposits",
      "B": "Touch the board terminals with a screwdriver to discharge the capacitors",
      "C": "Check the compressor leads for current with a basic clamp meter",
      "D": "Wait the time on the label and verify the DC bus voltage is low"
    },
    "answer": "D",
    "explanation": "Large capacitors on the inverter board hold a dangerous charge for several minutes, so you wait the labeled time and confirm with a meter that the DC bus is below about 50 volts. Shorting terminals with a tool can damage the board or cause injury. Contact cleaner is not a safe step near stored energy. Clamp measurements on the compressor leads are not meaningful with a basic meter.",
    "id": 215
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "Why do variable speed systems typically remove more moisture per hour of runtime at low speed than a single-speed system?",
    "options": {
      "A": "The refrigerant is colder because the metering device is always fully open",
      "B": "The compressor runs backward at low speed and pushes water into the drain",
      "C": "The coil stays cold for longer, giving a lower temperature relative to airflow",
      "D": "The thermostat reads humidity directly and shuts the compressor off at 50 percent"
    },
    "answer": "C",
    "explanation": "At low speed, the airflow is lower relative to coil capacity, so the coil runs colder and the air stays on the wet coil longer, and the unit also runs for long periods without cycling off. A fully open metering device would raise suction pressure rather than cool the coil. A compressor never runs backward in normal operation, and most thermostats do not shut off at a humidity level.",
    "id": 216
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "A 12,000 BTU/hr mini-split draws 1,000 watts at full capacity. What is its EER at that point?",
    "options": {
      "A": "12, because 12,000 BTU/hr divided by 1,000 watts equals 12",
      "B": "1.2, because 12,000 divided by 10,000 gives the ratio",
      "C": "3.5, because 12,000 BTU/hr is divided by 3,412 for kilowatts",
      "D": "0.083, because watts are divided by BTU per hour for efficiency"
    },
    "answer": "A",
    "explanation": "EER is BTU/hr removed divided by watts of input: 12,000 / 1,000 = 12. Dividing by 10,000 introduces a number that does not appear in the problem. Dividing the BTU figure by 3,412 converts it the wrong way, since 3,412 is the BTU/hr per kilowatt of input. Inverting the ratio gives watts per BTU, which is not EER.",
    "id": 217
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "A 10 kilohm negative temperature coefficient thermistor on a coil reads open when disconnected and tested with a meter. What is the correct conclusion?",
    "options": {
      "A": "The coil temperature is extremely high and the system should stop",
      "B": "The thermistor has failed and is likely to cause an error code",
      "C": "The thermistor is healthy because it reads high resistance when cold",
      "D": "The sensor reading can be ignored because the board bypasses it"
    },
    "answer": "B",
    "explanation": "An open sensor reads infinite resistance at any temperature, so it is failed, and the board will display a sensor error and may lock out. A healthy sensor reads close to its rated value at a known temperature, about 10,000 ohms at 77 degrees F. An open circuit is not the same as a high temperature, which would reduce resistance for an NTC part. The board uses the sensor and does not bypass it.",
    "id": 218
  },
  {
    "domain": "systems",
    "chapter": 23,
    "question": "Which statement about charging an inverter-driven mini-split is most accurate?",
    "options": {
      "A": "Add refrigerant until the suction gauge reaches the pressure of a fixed system",
      "B": "Use the same superheat target as a fixed piston system at any compressor speed",
      "C": "Charge by weight with a line length adjustment and verify using the manual's method",
      "D": "Charge to the pressure printed on the outdoor unit regardless of ambient temperature"
    },
    "answer": "C",
    "explanation": "Because compressor speed and EEV position change continuously, the manufacturer specifies a weight-based charge with a line length adjustment, followed by a check method such as discharge temperature at a set frequency. Chasing a suction pressure from a fixed system ignores the variable operation. A fixed piston superheat target does not apply when an EEV controls superheat. A single printed pressure cannot fit all outdoor temperatures.",
    "id": 219
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "What temperature is the cold-holding limit in the United States for potentially hazardous food in a walk-in cooler?",
    "options": {
      "A": "50 degrees F or below, because bacteria stop growing at that level",
      "B": "41 degrees F or below, which is the standard cold-holding limit",
      "C": "32 degrees F or below, the freezing point of water in food",
      "D": "45 degrees F or below, the setting used for frozen food storage"
    },
    "answer": "B",
    "explanation": "Food safety codes set the cold-holding limit at 41 degrees F or below for foods that could support bacterial growth. Bacteria slow down but do not stop at 50 degrees F, so that limit would allow unsafe storage. Freezing at 32 degrees F is a quality choice for certain products, not the standard limit. Frozen food is held near 0 degrees F, far lower than 45.",
    "id": 220
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "A walk-in has panels with R-28 insulation, 520 square feet of surface, an outside temperature of 90 degrees F and a box temperature of 36 degrees F. What is the approximate wall load?",
    "options": {
      "A": "About 28,000 BTU/hr, found by multiplying the area by the temperature difference",
      "B": "About 520 BTU/hr, found by dividing the area by the R-value and 36",
      "C": "About 1,000 BTU/hr, found by multiplying U, area and the 54 degree difference",
      "D": "About 15,000 BTU/hr, found by multiplying the R-value by 520 and 54"
    },
    "answer": "C",
    "explanation": "U equals 1 / 28 = 0.0357, and the load is 0.0357 x 520 x 54 = 1,003 BTU/hr. Multiplying only the area by the temperature difference skips the division by the R-value and gives about 28,080. Dividing the area by the R-value and the box temperature uses the wrong temperature and is not a heat transfer formula. Multiplying the R-value in rather than dividing makes the load larger as insulation improves, which is backward.",
    "id": 221
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "A walk-in freezer has a 1,000 watt, 240 volt defrost heater. What is its approximate current draw and resistance?",
    "options": {
      "A": "About 8.3 amps and 14.4 ohms, because the current is the power divided by 120",
      "B": "About 2.1 amps and 115 ohms, because the voltage is divided by the wattage",
      "C": "About 12.5 amps and 19.2 ohms, because three heaters are always installed together",
      "D": "About 4.17 amps and 57.6 ohms, from I = P / V and R = V squared / P"
    },
    "answer": "D",
    "explanation": "Current is 1,000 / 240 = 4.17 amps, and resistance is 240 squared / 1,000 = 57.6 ohms. Using 120 volts in the current formula does not match the 240 volt rating. A heater count is not given in the problem, so the 12.5 amp figure from three heaters does not apply to a single one. Dividing voltage by watts does not produce a valid unit for either current or resistance.",
    "id": 222
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "In a walk-in cooler, which condition results from a large evaporator TD of 20 degrees F or more compared with a TD of 10 degrees F?",
    "options": {
      "A": "Lower box humidity, which can dry out unwrapped product",
      "B": "Higher box humidity, because the colder coil adds moisture to the air",
      "C": "Higher suction pressure, since the coil is warmer than the air",
      "D": "Lower electrical use because the compressor works against less pressure"
    },
    "answer": "A",
    "explanation": "A large TD means a colder coil, which condenses and freezes more moisture out of the air, and the box humidity falls. A colder coil does not add moisture. A bigger TD requires a lower suction pressure, not a higher one, and the lower suction pressure reduces compressor efficiency, so electrical use does not fall.",
    "id": 223
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "What is the purpose of a fan delay after an electric defrost in a freezer?",
    "options": {
      "A": "To let the compressor oil drain down from the crankcase before restarting",
      "B": "To let water on the coil refreeze so droplets are not blown into the box",
      "C": "To test the defrost heaters with a short burst of airflow",
      "D": "To allow the head pressure control to open the receiver outlet valve"
    },
    "answer": "B",
    "explanation": "After defrost, the coil is wet and warm. If the fans start immediately, droplets would be thrown into the room and onto stored product, where they freeze. A short delay lets the coil cool and the water freeze on the fins. Oil return, heater testing and head pressure valves are not the job of the fan delay.",
    "id": 224
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "An R-134a system has 12 psig on the suction side and a suction line temperature of 38 degrees F. Saturation at 12 psig is about 10 degrees F. What is the superheat?",
    "options": {
      "A": "10 degrees F, because the saturation temperature equals the superheat",
      "B": "48 degrees F, because the line and saturation temperatures are added",
      "C": "26 degrees F, because the pressure is subtracted from the saturation value",
      "D": "28 degrees F, because it is the line temperature minus saturation"
    },
    "answer": "D",
    "explanation": "Superheat is the actual suction line temperature minus the saturation temperature at the suction pressure: 38 - 10 = 28 degrees F. The saturation temperature alone is a reference value and not the superheat. Adding the two temperatures has no physical meaning, and subtracting a pressure in psig from a temperature is not a valid operation.",
    "id": 225
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "A condensing unit has high head pressure, high amp draw, and very high subcooling on a hot day. Which cause fits those readings best?",
    "options": {
      "A": "A restricted liquid line drier causing a large pressure drop before the metering device",
      "B": "A low refrigerant charge that leaves the condenser nearly empty of liquid",
      "C": "A dirty condenser coil or failed condenser fan holding liquid in the condenser",
      "D": "A bad evaporator fan motor that reduces the load on the compressor"
    },
    "answer": "C",
    "explanation": "Poor heat rejection raises condensing pressure and the compressor current, and liquid backs up in the condenser to give high subcooling. A restricted drier causes low pressure after the restriction and usually low or normal head. Low charge gives low subcooling, not high. An evaporator fan failure lowers the suction pressure and lowers current rather than raising it.",
    "id": 226
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "Why does a low temperature walk-in freezer commonly have a heated pressure relief port?",
    "options": {
      "A": "To equalize pressure when warm air cools after the door closes",
      "B": "To vent refrigerant if the receiver pressure rises above the safe limit",
      "C": "To let the defrost water drain out of the box through the wall",
      "D": "To supply fresh air when the evaporator fans are shut down"
    },
    "answer": "A",
    "explanation": "Warm air trapped when the door closes cools and contracts, creating a vacuum that makes the door hard to open and can damage panels. The port allows air to flow in and out and the heater keeps frost from sealing it. Refrigerant relief is the job of relief valves on vessels. Drain lines handle defrost water, and the port does not supply fresh air.",
    "id": 227
  },
  {
    "domain": "commercial",
    "chapter": 24,
    "question": "A unit cooler moves 2,500 CFM and the air temperature drops 7 degrees F across the coil. What is the sensible capacity?",
    "options": {
      "A": "About 17,500 BTU/hr, found by multiplying CFM by the temperature drop",
      "B": "About 31,500 BTU/hr, found by multiplying CFM, the drop and the factor 1.8",
      "C": "About 18,900 BTU/hr, found by multiplying 1.08 by 2,500 and by 7",
      "D": "About 1,620 BTU/hr, found by dividing 2,500 by 1.08 and then by 7"
    },
    "answer": "C",
    "explanation": "Capacity equals 1.08 x 2,500 x 7 = 18,900 BTU/hr. Multiplying only CFM by the drop skips the 1.08 constant and gives 17,500. The 31,500 figure uses a factor of 1.8 that does not belong in the air-side formula. Dividing by the constant and the drop shrinks the answer far below the real value.",
    "id": 228
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "An ice machine receives 70 degree F water and must make 1 pound of ice at 32 degrees F. Approximately how much heat must be removed from the water?",
    "options": {
      "A": "38 BTU, because only the temperature change of the water counts",
      "B": "144 BTU, because only the heat of fusion is removed from water",
      "C": "182 BTU, which adds 38 BTU of sensible heat and 144 BTU of fusion",
      "D": "214 BTU, which adds 70 BTU of sensible heat and 144 BTU of fusion"
    },
    "answer": "C",
    "explanation": "The total heat is the sensible cooling from 70 to 32 degrees F, which is 38 BTU, plus the latent heat of fusion of 144 BTU, giving 182 BTU. Using only the temperature change ignores the freezing step, using only the latent heat ignores the cooling step, and using the full 70 degrees forgets that the water stops cooling at 32 degrees F when freezing begins.",
    "id": 229
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "During the harvest cycle of a cube ice machine, which action releases the ice from the evaporator plate?",
    "options": {
      "A": "The water pump speeds up to wash the cubes loose",
      "B": "A hot gas valve sends discharge vapor through the evaporator plate",
      "C": "The condenser fan reverses to push warm air across the plate",
      "D": "The thermostatic expansion valve opens fully to flood the plate"
    },
    "answer": "B",
    "explanation": "Hot discharge vapor from the compressor is routed into the evaporator, which melts the thin layer of ice touching the metal so the cubes slide off. Pump speed does not heat the plate, a condenser fan cannot reverse its airflow to heat an evaporator, and opening the expansion valve would only deliver more cold refrigerant and make the plate colder.",
    "id": 230
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "A technician finds that an ice machine harvest cycle lasts 8 minutes when it normally lasts 3 minutes. Which is the most likely cause?",
    "options": {
      "A": "A clean condenser coil on an air-cooled machine in a cool room",
      "B": "A hot gas valve that is failing to open fully",
      "C": "A water filter that was changed on the correct schedule",
      "D": "A bin control that is correctly sensing a full bin of ice"
    },
    "answer": "B",
    "explanation": "Harvest depends on hot gas reaching the evaporator to melt the ice bond, so a valve that does not open fully starves the plate of heat and stretches the harvest. A clean coil in a cool room helps the machine, a fresh filter has no effect on harvest heat, and a full bin would stop the machine before a harvest began.",
    "id": 231
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "A 500 pound per day ice machine is installed in a small closet. Which result is most likely after several hours?",
    "options": {
      "A": "Ice production rises because the closet traps cold air around the machine",
      "B": "The water curtain freezes in place and prevents any harvest at all",
      "C": "Heat rejected by the condenser raises the closet temperature and ice production falls",
      "D": "The compressor runs cooler because the surrounding space is smaller and sealed"
    },
    "answer": "C",
    "explanation": "An air-cooled machine dumps its heat of rejection into the surrounding air, so a small closed room warms until head pressure climbs and capacity drops. The closet does not trap cold, a warm room does not freeze the curtain, and a sealed space makes the compressor run hotter, not cooler.",
    "id": 232
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "A medium temperature R-134a case has a suction pressure of 18.4 PSIG at the case and a suction line temperature of 28 degrees F at the case outlet. What is the superheat?",
    "options": {
      "A": "8 degrees F, since saturation at that pressure is 20 degrees F",
      "B": "12 degrees F, since saturation at that pressure is 16 degrees F",
      "C": "20 degrees F, since the pressure reading equals the saturation temperature",
      "D": "28 degrees F, since the line temperature alone is the superheat"
    },
    "answer": "A",
    "explanation": "At 18.4 PSIG, R-134a boils at 20 degrees F, so superheat is 28 minus 20, or 8 degrees F. A 12 degree answer uses a saturation temperature that does not match the chart, a 20 degree answer wrongly treats a pressure number as a temperature, and a 28 degree answer forgets to subtract the saturation temperature.",
    "id": 233
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "What is the largest single heat load on a typical open vertical display case?",
    "options": {
      "A": "Heat given off by the interior LED lighting strips",
      "B": "Warm room air entering through the opening, called infiltration",
      "C": "Heat from the evaporator fan motors inside the case",
      "D": "Heat carried in by the stocked product at delivery"
    },
    "answer": "B",
    "explanation": "Open cases lose their cold air to the room, and the warm, humid air that replaces it is usually well over half of the total load. Lighting, fan motors and product all contribute, but each is a smaller share, and product heat is a one-time load while infiltration continues all day.",
    "id": 234
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "Which defrost method works well in a medium temperature case but cannot be used in a freezer?",
    "options": {
      "A": "Hot gas defrost using discharge vapor from the compressor rack",
      "B": "Electric defrost using heater rods in the evaporator coil",
      "C": "Reverse cycle defrost using a reversing valve in the system",
      "D": "Off-cycle defrost relying on warm air from the box itself"
    },
    "answer": "D",
    "explanation": "Off-cycle defrost only works when the air in the case is above freezing, which is true in medium temperature cases and never in a freezer. Hot gas and electric heat both produce their own heat and work in freezers, and a reversing valve is a heat pump device not normally found on a display case.",
    "id": 235
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "A door on a low temperature case fogs up although the refrigeration is working correctly. What should the technician check first?",
    "options": {
      "A": "Whether the anti-sweat heater is working and keeping the glass above the dew point",
      "B": "Whether the compressor discharge pressure is above 300 PSIG",
      "C": "Whether the evaporator fan delay is set to zero minutes",
      "D": "Whether the drain line has been replaced with a larger size"
    },
    "answer": "A",
    "explanation": "Fogging forms when the glass falls below the dew point of the store air, and the anti-sweat heater is what prevents that. A discharge pressure figure has no connection to door glass, the fan delay affects the air after defrost and not the door, and drain size relates to water removal, not glass condensation.",
    "id": 236
  },
  {
    "domain": "commercial",
    "chapter": 25,
    "question": "An ice machine scale problem is found on the evaporator. Which is the correct way to clean it?",
    "options": {
      "A": "Use household bleach first, then add an acid cleaner to speed the reaction",
      "B": "Scrape it off with a steel tool, then run the machine as normal",
      "C": "Use an approved ice machine descaler, follow the label, and rinse the system well",
      "D": "Spray it with water from a hose while the unit is still powered"
    },
    "answer": "C",
    "explanation": "An approved descaler dissolves mineral scale, and a thorough rinse removes chemical residue that would end up in food. Mixing bleach with acid can release chlorine gas, steel tools can scratch and damage the plate, and spraying water on an energized machine creates a shock hazard.",
    "id": 237
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "A chilled water loop carries 360 GPM with water entering at 56 degrees F and leaving at 44 degrees F. How many tons of cooling is the chiller providing?",
    "options": {
      "A": "180 tons, found by dividing 500 x 360 x 12 by 12,000",
      "B": "120 tons, found by dividing the water flow by three",
      "C": "360 tons, found by treating each GPM as one ton",
      "D": "150 tons, found by dividing 500 x 360 x 10 by 12,000"
    },
    "answer": "A",
    "explanation": "The delta T is 56 minus 44, or 12 degrees F, so the heat moved is 500 x 360 x 12 = 2,160,000 BTU/hr, and dividing by 12,000 gives 180 tons. Dividing flow by three has no physical basis, a ton is not a gallon per minute, and using a 10 degree delta T ignores the stated temperatures and understates the load.",
    "id": 238
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "A water-cooled chiller has a condenser water flow of 3.0 GPM per ton and a 10 degree F range. What does that flow remove from the condenser per ton?",
    "options": {
      "A": "12,000 BTU/hr, equal to the cooling load alone",
      "B": "18,000 BTU/hr, because flow is multiplied by 6,000",
      "C": "3,000 BTU/hr, equal to the heat from compression alone",
      "D": "15,000 BTU/hr, equal to the cooling load plus compressor heat"
    },
    "answer": "D",
    "explanation": "Using Q = 500 x GPM x delta T gives 500 x 3.0 x 10 = 15,000 BTU/hr, which is the 12,000 BTU/hr taken from the building plus about 3,000 BTU/hr added by the compressor. Counting only the cooling load or only the compressor heat leaves out half of the condenser duty, and the 18,000 figure comes from an invented multiplier.",
    "id": 239
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "What is the approach of a cooling tower that delivers 85 degree F water when the outdoor wet bulb temperature is 78 degrees F?",
    "options": {
      "A": "10 degrees F, found by using the range instead",
      "B": "163 degrees F, found by adding the wet bulb to the leaving water",
      "C": "7 degrees F, found by subtracting the wet bulb from the leaving water",
      "D": "17 degrees F, found by subtracting the wet bulb from the dry bulb"
    },
    "answer": "C",
    "explanation": "Approach is the leaving water temperature minus the wet bulb temperature, so 85 minus 78 equals 7 degrees F. The range is a different quantity, based on water entering and leaving the tower, summing two temperatures has no meaning here, and the dry bulb is not involved in the definition of approach.",
    "id": 240
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "A cooling tower circulates 600 GPM with a 10 degree F range. About how much water evaporates each minute?",
    "options": {
      "A": "0.6 GPM, found by taking 0.1 percent of the circulation",
      "B": "6.0 GPM, found by taking 1 percent of the circulation",
      "C": "60 GPM, found by taking 10 percent of the circulation",
      "D": "1.0 GPM, found by dividing the circulation by cycles"
    },
    "answer": "B",
    "explanation": "About 1 percent of the flow evaporates for every 10 degrees F of range, so 1 percent of 600 GPM is 6 GPM. Taking a tenth of a percent understates it, taking 10 percent overstates it by ten times, and dividing the circulation by a cycle count mixes up evaporation with blowdown.",
    "id": 241
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "A tower runs at 5 cycles of concentration with evaporation of 4.0 GPM. What is the blowdown rate?",
    "options": {
      "A": "0.8 GPM, because blowdown is evaporation divided by the cycles",
      "B": "4.0 GPM, because blowdown always equals the evaporation rate",
      "C": "1.0 GPM, because blowdown is evaporation divided by (cycles minus 1)",
      "D": "20 GPM, because blowdown is evaporation multiplied by the cycles"
    },
    "answer": "C",
    "explanation": "Blowdown equals evaporation divided by (cycles minus 1), so 4.0 / 4 = 1.0 GPM. Dividing by the cycles alone gives 0.8, which is too low, blowdown equal to evaporation would hold the tower at 2 cycles, and multiplying by cycles would waste a huge amount of water.",
    "id": 242
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "A chiller log shows a condenser approach of 10 degrees F with normal water flow, where a clean condenser would show about 3 degrees F. What is the most likely cause?",
    "options": {
      "A": "Fouled condenser tubes or non-condensable gases in the condenser",
      "B": "A frozen evaporator caused by too little chilled water flow",
      "C": "A chilled water pump running too fast for the system",
      "D": "A leaving chilled water setpoint that is too high"
    },
    "answer": "A",
    "explanation": "The condenser approach is the condensing temperature minus the leaving condenser water, and a large value with good flow means heat is not crossing the tubes, from scale, biofilm or air in the shell. Evaporator freezing and the chilled water pump affect the cold side, and the leaving water setpoint does not change condenser heat transfer.",
    "id": 243
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "Which safety control proves water is moving through the evaporator before the compressor is allowed to start?",
    "options": {
      "A": "The high pressure cutout wired in the compressor motor circuit",
      "B": "The oil pressure switch connected to the lubrication system",
      "C": "The flow switch installed in the chilled water piping",
      "D": "The purge unit installed on the low pressure chiller shell"
    },
    "answer": "C",
    "explanation": "A flow switch confirms water is moving, which protects the evaporator tubes from freezing and bursting. The high pressure cutout guards the refrigerant side against excessive pressure, oil pressure protects bearings, and a purge unit removes air from a low pressure machine and has nothing to do with proving water flow.",
    "id": 244
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "A chiller uses 78 kW to produce 130 tons of cooling. What is its efficiency in kW per ton?",
    "options": {
      "A": "1.67 kW/ton, found by dividing tons by kilowatts",
      "B": "0.60 kW/ton, found by dividing kilowatts by tons",
      "C": "10.0 kW/ton, found by dividing kilowatts by 7.8",
      "D": "0.78 kW/ton, found by dividing kilowatts by 100"
    },
    "answer": "B",
    "explanation": "Efficiency in kW per ton is power divided by cooling output, so 78 / 130 = 0.60 kW/ton. Inverting the ratio gives tons per kilowatt, which is a different number, and dividing by an unrelated constant such as 7.8 or 100 does not use the stated cooling output.",
    "id": 245
  },
  {
    "domain": "commercial",
    "chapter": 26,
    "question": "Why do low pressure chillers using R-123 include a purge unit?",
    "options": {
      "A": "To release excess refrigerant to the atmosphere when head pressure is high",
      "B": "To raise the evaporator pressure above atmospheric pressure on startup",
      "C": "To add oil to the compressor bearings during each start",
      "D": "To remove air and moisture that leak in because the shell runs below atmospheric pressure"
    },
    "answer": "D",
    "explanation": "The low pressure side of these machines is in a vacuum, so leaks draw air and moisture in, and the purge unit removes those non-condensables. Releasing refrigerant to the atmosphere is illegal venting, the purge does not pressurize the evaporator, and bearing lubrication is handled by the oil system.",
    "id": 246
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A 600 square foot wall has an R-value of 15. The indoor temperature is 75 degrees F and the outdoor temperature is 95 degrees F. What is the heat gain through the wall?",
    "options": {
      "A": "800 BTU/hr, found by multiplying U by area by 20 degrees F",
      "B": "1,800 BTU/hr, found by multiplying area by R-value by 20 degrees F",
      "C": "450 BTU/hr, found by dividing area by R-value and by 20",
      "D": "8,000 BTU/hr, found by multiplying area by 20 and by 15 hundredths"
    },
    "answer": "A",
    "explanation": "The U-factor is 1 / 15 = 0.0667, and Q = 0.0667 x 600 x 20 = 800 BTU/hr. Multiplying by R-value instead of U-factor reverses the effect of insulation, dividing the area by R and then by delta T is not the heat transfer formula, and the last method uses an invented multiplier that gives ten times the real result.",
    "id": 247
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A house leaks 150 CFM of outdoor air. Outdoor air is 95 degrees F and indoor air is 75 degrees F. What is the sensible load from this leakage?",
    "options": {
      "A": "3,240 BTU/hr, found by multiplying 1.08 by 150 by 20",
      "B": "10,125 BTU/hr, found by multiplying 4.5 by 150 by 15",
      "C": "8,160 BTU/hr, found by multiplying 0.68 by 150 by 80",
      "D": "1,500 BTU/hr, found by multiplying 150 by 10"
    },
    "answer": "A",
    "explanation": "The sensible load from an air flow is 1.08 x CFM x delta T, so 1.08 x 150 x 20 = 3,240 BTU/hr. The 4.5 factor is for total heat using enthalpy difference, the 0.68 factor is for latent load using grains of moisture, and multiplying CFM by 10 has no basis in the air density and specific heat.",
    "id": 248
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "Why does an oversized air conditioner often leave a house feeling cool but humid?",
    "options": {
      "A": "The refrigerant charge is always too low in a large unit",
      "B": "The short run time prevents the coil from removing much moisture",
      "C": "The condenser fan runs more slowly than the evaporator fan",
      "D": "The thermostat reads humidity instead of temperature in large units"
    },
    "answer": "B",
    "explanation": "An oversized unit reaches the setpoint quickly and shuts off before the coil has been cold and wet long enough to condense and drain water, so moisture is left in the air. Charge is not tied to size, fan speeds are unrelated to moisture removal, and a thermostat measures temperature, not humidity, unless a special control is added.",
    "id": 249
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A west-facing window has 40 square feet of glass, an SHGC of 0.30 and a peak solar intensity of 160 BTU/hr per square foot. What is the solar heat gain?",
    "options": {
      "A": "6,400 BTU/hr, found by ignoring the glass SHGC value",
      "B": "0.25 BTU/hr, found by dividing the area by the intensity",
      "C": "1,920 BTU/hr, found by multiplying area by SHGC by intensity",
      "D": "4,480 BTU/hr, found by multiplying area by intensity by 0.70"
    },
    "answer": "C",
    "explanation": "Solar gain is area x SHGC x intensity, so 40 x 0.30 x 160 = 1,920 BTU/hr. Ignoring the SHGC assumes that all sunlight passes through the glass, dividing area by intensity gives a meaningless number, and multiplying by 0.70 uses the share of sunlight blocked rather than the share that passes.",
    "id": 250
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A calculated total cooling load is 30,000 BTU/hr with a sensible load of 22,500 BTU/hr. What is the sensible heat ratio?",
    "options": {
      "A": "0.33, found by dividing the latent load by the sensible load",
      "B": "0.75, found by dividing the sensible load by the total load",
      "C": "1.33, found by dividing the total load by the sensible load",
      "D": "0.25, found by dividing the sensible load by 90,000"
    },
    "answer": "B",
    "explanation": "The sensible heat ratio is sensible load divided by total load, which gives 22,500 / 30,000 = 0.75. The first wrong value uses latent over sensible, the second is the inverse ratio and exceeds 1, which cannot occur for a sensible fraction, and the last divides by an unrelated number.",
    "id": 251
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A gas furnace has an input of 100,000 BTU/hr and an AFUE of 80 percent. How much heat does it deliver to the air?",
    "options": {
      "A": "125,000 BTU/hr, found by dividing the input by 0.80",
      "B": "20,000 BTU/hr, found by taking the losses only",
      "C": "100,000 BTU/hr, since input and output are always equal",
      "D": "80,000 BTU/hr, found by multiplying the input by 0.80"
    },
    "answer": "D",
    "explanation": "Output equals input times efficiency, so 100,000 x 0.80 = 80,000 BTU/hr. Dividing by the efficiency would suggest the furnace creates energy, the loss figure of 20,000 is the heat sent up the flue, and equal input and output would mean the furnace is 100 percent efficient.",
    "id": 252
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A load calculation gives 21,600 BTU/hr. Which equipment size is the best choice?",
    "options": {
      "A": "A 36,000 BTU/hr unit, to allow plenty of reserve capacity",
      "B": "A 24,000 BTU/hr unit, which is about 111 percent of the load",
      "C": "A 60,000 BTU/hr unit, so the house cools quickly on hot days",
      "D": "A 12,000 BTU/hr unit, because it will always run continuously"
    },
    "answer": "B",
    "explanation": "A 2-ton unit at 24,000 BTU/hr is about 111 percent of the load, which falls inside the commonly used selection limit of roughly 90 to 115 percent. The 36,000 and 60,000 BTU/hr units are 167 and 278 percent of the load and would short cycle, and a 12,000 BTU/hr unit is only 56 percent and would not hold temperature.",
    "id": 253
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "A 1,000 square foot ceiling has an R-value of 38. The attic is 105 degrees F and the room is 75 degrees F. About what is the heat gain through the ceiling?",
    "options": {
      "A": "3,420 BTU/hr, found by multiplying R-value by delta T by 3",
      "B": "30,000 BTU/hr, found by multiplying area by delta T",
      "C": "56 BTU/hr, found by dividing area by R and adding delta T",
      "D": "790 BTU/hr, found by multiplying area by delta T and dividing by R"
    },
    "answer": "D",
    "explanation": "The gain is area x delta T / R = 1,000 x 30 / 38 = 789, or about 790 BTU/hr. Multiplying area by delta T without dividing by R ignores insulation entirely, and the other results use invented combinations that are not part of the conduction equation.",
    "id": 254
  },
  {
    "domain": "design",
    "chapter": 27,
    "question": "What does a load calculation tell the technician that a rule of thumb of one ton per 500 square feet cannot?",
    "options": {
      "A": "The brand of equipment that has the lowest purchase price",
      "B": "The exact refrigerant charge in pounds for any chosen unit",
      "C": "How insulation, windows, leakage and climate change the real size needed",
      "D": "The correct thermostat location in each room of the house"
    },
    "answer": "C",
    "explanation": "A load calculation counts the conduction, solar, infiltration and internal gains of the actual building, so it shows why two houses of equal area can need very different equipment. It does not rank brands by price, it does not set the charge, which comes from the equipment data plate and measurements, and it does not place thermostats.",
    "id": 255
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "A 2,400 square foot home has 4 bedrooms. Using the ASHRAE 62.2 relationship of 0.03 x area plus 7.5 x (bedrooms + 1), what whole-house ventilation rate is required?",
    "options": {
      "A": "72 CFM, found by using only the floor area term",
      "B": "109.5 CFM, found by adding the floor area term to 7.5 x 5",
      "C": "102 CFM, found by adding the floor area term to 7.5 x 4",
      "D": "37.5 CFM, found by using only the bedroom term"
    },
    "answer": "B",
    "explanation": "The area term is 0.03 x 2,400 = 72 CFM and the bedroom term is 7.5 x (4 + 1) = 37.5 CFM, so the total is 109.5 CFM. Using only one term leaves out the other half of the requirement, and counting 4 bedrooms without adding the extra one gives 72 + 30 = 102 CFM, which leaves out the standard's added allowance.",
    "id": 256
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "An office of 3,000 square feet has 20 people. The standard values are 5 CFM per person and 0.06 CFM per square foot. What breathing zone outdoor airflow is needed?",
    "options": {
      "A": "100 CFM, found by counting only the people in the office",
      "B": "280 CFM, found by adding both the people and the area terms",
      "C": "180 CFM, found by counting only the floor area of the office",
      "D": "300 CFM, found by multiplying the people by 15 CFM each"
    },
    "answer": "B",
    "explanation": "Vbz = Rp x Pz + Ra x Az = 5 x 20 + 0.06 x 3,000 = 100 + 180 = 280 CFM. Using only the people or only the area leaves out half of the sources, and an arbitrary 15 CFM per person does not come from the office values in the standard.",
    "id": 257
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "A room has 1,420 ppm of CO2 with 420 ppm outdoors. Using 10,000 divided by the ppm difference, what is the outdoor air per person?",
    "options": {
      "A": "7.0 CFM per person, found by dividing by the indoor ppm only",
      "B": "23.8 CFM per person, found by dividing by the outdoor ppm only",
      "C": "10 CFM per person, found by dividing by the ppm difference of 1,000",
      "D": "0.01 CFM per person, found by using the CO2 generation rate"
    },
    "answer": "C",
    "explanation": "The difference is 1,420 minus 420 = 1,000 ppm, and 10,000 / 1,000 = 10 CFM per person. Dividing by the indoor value alone ignores the outdoor background, dividing by the outdoor value alone ignores the room entirely, and 0.01 is the CO2 production rate of a person, not the ventilation rate.",
    "id": 258
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "What is the main reason a filter with a very high MERV rating can cause HVAC problems in a home?",
    "options": {
      "A": "It increases pressure drop and may cut airflow below what the system needs",
      "B": "It adds moisture to the air stream as air passes through",
      "C": "It makes the evaporator coil warmer than the dew point",
      "D": "It removes oxygen from the supply air before delivery"
    },
    "answer": "A",
    "explanation": "Dense media resists airflow, so the blower may move less air, which can freeze a coil in cooling or overheat a furnace. A filter does not add moisture, a warm coil would result from too much airflow rather than too little, and no filter removes oxygen from air.",
    "id": 259
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "What does an energy recovery ventilator move that a heat recovery ventilator does not?",
    "options": {
      "A": "Chemical vapors, since the core absorbs them from the air",
      "B": "Pressure, since it works as a booster fan for ducts",
      "C": "Refrigerant, since it carries heat through the walls of the core",
      "D": "Moisture, since its core passes water vapor as well as heat"
    },
    "answer": "D",
    "explanation": "An ERV core transfers both sensible heat and water vapor, which lowers the latent load of humid outdoor air, while an HRV transfers only heat. Neither device carries refrigerant, neither is meant to remove chemical vapors, and neither is a duct booster fan.",
    "id": 260
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "An ERV handles 150 CFM of 95 degree F air with indoor air at 75 degrees F and a sensible effectiveness of 60 percent. How much sensible load does it remove?",
    "options": {
      "A": "3,240 BTU/hr, found by 1.08 x 150 x 20",
      "B": "1,944 BTU/hr, found by 1.08 x 150 x 12",
      "C": "1,296 BTU/hr, found by 1.08 x 150 x 8",
      "D": "2,430 BTU/hr, found by 4.5 x 150 x 3.6"
    },
    "answer": "B",
    "explanation": "The core cools the air by 0.60 x 20 = 12 degrees F, so the sensible load removed is 1.08 x 150 x 12 = 1,944 BTU/hr. Using the full 20 degree difference assumes 100 percent effectiveness, using 8 degrees applies the wrong share, and the enthalpy-based factor is for total heat, not a sensible temperature change.",
    "id": 261
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "A technician measures 12 ppm of carbon monoxide near a gas furnace in a home. What is the correct response?",
    "options": {
      "A": "Record the reading and leave, since low levels are harmless",
      "B": "Raise the thermostat setting to push the gas up the flue",
      "C": "Install an ozone generator to destroy the gas in the air",
      "D": "Investigate the appliance and flue, check ventilation, and correct the source"
    },
    "answer": "D",
    "explanation": "A reading above 9 ppm near an appliance shows incomplete combustion or poor venting, so the cause must be found and fixed, and the occupants warned if levels are high. Ignoring it risks poisoning, changing the thermostat does not fix combustion, and ozone generators do not remove carbon monoxide and are themselves lung irritants.",
    "id": 262
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "Air at 75 degrees F has a dew point of 60 degrees F. What happens when this air touches a duct surface at 55 degrees F?",
    "options": {
      "A": "Water condenses on the duct surface because it is below the dew point",
      "B": "Nothing occurs, because relative humidity is below 100 percent in the room",
      "C": "Water evaporates from the surface because the duct is colder than the room",
      "D": "The air becomes drier because it gives up heat to the metal"
    },
    "answer": "A",
    "explanation": "Any surface colder than the dew point of the nearby air will collect condensation, and 55 degrees F is below 60 degrees F. The room's relative humidity is below 100 percent, but the thin layer of air touching the cold metal is cooled to its dew point, so water forms. Evaporation needs a surface warmer than the air, and the metal does not make the whole room drier.",
    "id": 263
  },
  {
    "domain": "air_quality",
    "chapter": 28,
    "question": "Which action best prevents mold growth caused by an air conditioning system?",
    "options": {
      "A": "Close all supply registers in unused rooms to save moisture",
      "B": "Raise the humidity setting on the thermostat during the summer",
      "C": "Keep the drain line and pan clean and the drain free of slime",
      "D": "Run the system with the filter removed to improve airflow"
    },
    "answer": "C",
    "explanation": "Mold needs moisture, and a clean pan and a free-flowing drain keep the coil water leaving the building. Closing registers can raise duct pressure and cause leaks, higher indoor humidity encourages mold, and removing the filter lets dust and spores build up on the coil.",
    "id": 264
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "An R-410A system shows a suction pressure of 142 psig and a suction line temperature of 60 degrees F. Using 142 psig as 50 degrees F, what is the superheat?",
    "options": {
      "A": "10 degrees F, found by subtracting saturation temperature from measured line temperature",
      "B": "20 degrees F, found by adding the two temperatures and dividing by the number of readings",
      "C": "8 degrees F, found by subtracting the line temperature from the high side saturation temperature",
      "D": "50 degrees F, found by reading the saturation temperature directly from the suction gauge"
    },
    "answer": "A",
    "explanation": "Superheat is the measured suction line temperature minus the saturation temperature, which is 60 minus 50, or 10 degrees F. Adding and averaging the temperatures has no physical meaning in this calculation. Subtracting in the opposite direction or using the high-side temperature mixes up superheat with subcooling. The saturation temperature alone is only one half of the calculation, so reading it from the gauge does not produce a superheat value.",
    "id": 265
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "A technician measures a liquid line pressure of 365 psig on an R-410A system, which corresponds to 110 degrees F, and a liquid line temperature of 100 degrees F. What is the subcooling?",
    "options": {
      "A": "5 degrees F, because the liquid line is measured halfway through the condenser coil",
      "B": "210 degrees F, because the pressure and temperature readings are added to find subcooling",
      "C": "10 degrees F, because the liquid is cooler than saturation by that amount",
      "D": "15 degrees F, because the condensing temperature is compared against the outdoor air temperature"
    },
    "answer": "C",
    "explanation": "Subcooling is the saturation temperature at the liquid pressure minus the liquid line temperature, which is 110 minus 100, or 10 degrees F. A halfway reading is not part of the method. Adding pressure and temperature mixes units and has no meaning. Comparing condensing temperature with outdoor air gives the condenser temperature difference, a different performance number that does not describe the liquid's cooling below saturation.",
    "id": 266
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "A fixed orifice air conditioner is being charged. Which method do manufacturers most often specify for checking its refrigerant charge?",
    "options": {
      "A": "Charge until the liquid line sight glass shows no bubbles at all outdoor temperatures",
      "B": "Charge until the suction line frosts over at the compressor inlet service valve",
      "C": "Charge to a target subcooling taken from the condenser nameplate at any conditions",
      "D": "Charge to a chart superheat set by wet bulb and outdoor temperature"
    },
    "answer": "D",
    "explanation": "A fixed orifice cannot adjust itself, so its superheat changes with indoor wet bulb and outdoor temperature, and the manufacturer's chart gives the target for those conditions. A clear sight glass shows only that liquid is present, not that the charge is correct. Frost on the suction line signals trouble, not a charged system. Subcooling is the usual target for TXV systems, not for fixed orifice systems.",
    "id": 267
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "A TXV system shows a low suction pressure, high superheat of 25 degrees F, and subcooling near 1 degree F. Which fault is most likely?",
    "options": {
      "A": "An overcharge that has filled the condenser with extra liquid refrigerant",
      "B": "A low refrigerant charge caused by a leak somewhere in the sealed system",
      "C": "A dirty condenser coil that has raised the head pressure above normal",
      "D": "A compressor with worn valves that leaks discharge vapor back to the suction side"
    },
    "answer": "B",
    "explanation": "Low suction pressure with high superheat and almost no subcooling means little liquid is reaching the metering device and the condenser, which is the low charge pattern. An overcharge gives high subcooling and low superheat. A dirty condenser raises head pressure and does not starve the evaporator. A weak compressor raises suction pressure and lowers head pressure, the opposite pattern.",
    "id": 268
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "A system moves 1,000 CFM across its evaporator with a measured delta T of 20 degrees F. Using 1.08 as the constant, what sensible capacity is this?",
    "options": {
      "A": "10,800 BTU per hour, found by multiplying 1.08 by 10,000 as a rough estimate",
      "B": "12,000 BTU per hour, equal to the rating of one ton of cooling capacity",
      "C": "18,000 BTU per hour, found by multiplying CFM by delta T and then by 0.9",
      "D": "21,600 BTU per hour, found by multiplying 1.08 by 1,000 by 20"
    },
    "answer": "D",
    "explanation": "The formula is 1.08 x CFM x delta T, so 1.08 x 1,000 = 1,080, and 1,080 x 20 = 21,600 BTU per hour. The figure of 10,800 uses a made-up CFM. The figure of 12,000 is just the definition of one ton, not a result of these readings. The figure of 18,000 uses an incorrect constant of 0.9 in place of 1.08.",
    "id": 269
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "A technician charges an R-410A TXV system and reads a condensing pressure of 418 psig, equal to 120 degrees F, with 95 degrees F outdoor air. What is the condenser temperature difference?",
    "options": {
      "A": "25 degrees F, found by subtracting the outdoor air temperature from the condensing temperature",
      "B": "215 degrees F, found by adding the outdoor temperature to the pressure reading",
      "C": "120 degrees F, because condenser temperature difference equals the saturation temperature alone",
      "D": "23 degrees F, found by subtracting the outdoor temperature from the suction line temperature"
    },
    "answer": "A",
    "explanation": "Condenser temperature difference is the condensing temperature minus the entering outdoor air temperature, which is 120 minus 95, or 25 degrees F. Adding a pressure to a temperature mixes units and gives nothing useful. The saturation temperature alone is only one input. The suction line temperature belongs to the low side and has no role in the condenser difference.",
    "id": 270
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "Compare two systems with the same suction pressure. System one has 4 degrees F superheat and system two has 28 degrees F superheat. What does the high figure most likely indicate on a TXV system?",
    "options": {
      "A": "A flooded coil sending liquid refrigerant toward the compressor inlet",
      "B": "A starved evaporator, often from low charge or a restriction",
      "C": "An overcharged condenser with unusually high subcooling at the liquid line",
      "D": "A normal operating condition for any TXV system under typical summer load"
    },
    "answer": "B",
    "explanation": "A superheat of 28 degrees F means vapor is heated far above saturation, so the coil is receiving too little liquid. Low charge, a plugged drier or distributor, or a TXV stuck nearly closed can all cause that. A flooded coil is indicated by very low superheat, as in system one. High subcooling relates to the liquid side. A TXV normally holds about 8 to 12 degrees F, so 28 is not normal.",
    "id": 271
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "Before adding refrigerant to a system with low delta T, a technician finds a badly clogged return filter. What should be done first?",
    "options": {
      "A": "Add refrigerant until the suction pressure matches the nameplate value for the unit",
      "B": "Replace the metering device because it cannot control flow with low airflow",
      "C": "Replace the filter, then recheck superheat and delta T before charging",
      "D": "Install a larger outdoor condenser so the system can reject more heat"
    },
    "answer": "C",
    "explanation": "Low airflow alone changes pressures, superheat and delta T, so charging with a dirty filter would leave the system overcharged once airflow is restored. The filter is cheap to replace and the readings should be retaken afterward. Adding refrigerant first treats a symptom. Replacing the metering device is premature when airflow is the cause. A bigger condenser does not address a starved airflow problem on the indoor side.",
    "id": 272
  },
  {
    "domain": "diagnostics",
    "chapter": 29,
    "question": "A system shows high suction pressure, low head pressure, low superheat and low subcooling. Which component is the most likely cause?",
    "options": {
      "A": "A partially blocked filter drier that restricts liquid flow to the metering device",
      "B": "A condenser fan motor that has stopped running and left the coil unventilated",
      "C": "A compressor whose internal valves leak and cannot hold a pressure difference",
      "D": "A TXV bulb that has lost its charge and left the valve nearly closed"
    },
    "answer": "C",
    "explanation": "Worn valves let high-side vapor slip back to the low side, raising suction pressure and lowering head pressure, with little superheat or subcooling. A blocked drier gives low suction pressure and high superheat. A stopped condenser fan sends head pressure sharply upward. A TXV that has lost its bulb charge closes, which starves the evaporator and drops suction pressure.",
    "id": 273
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A technician wants to read a deep vacuum of 500 microns during evacuation. Which instrument is designed to read that range?",
    "options": {
      "A": "A compound gauge on the low side of the manifold gauge set",
      "B": "A micron gauge with an electronic sensor connected near the system",
      "C": "A high-side gauge rated to 800 psig for discharge line readings",
      "D": "A mercury manometer that reads duct static pressure in inches of water"
    },
    "answer": "B",
    "explanation": "A micron gauge senses absolute pressure electronically and shows values such as 500 microns directly. A compound gauge needle moves only slightly between 29 and 30 inches of mercury and cannot resolve a deep vacuum. A high-side gauge reads positive pressure only. A manometer measuring duct static pressure works in inches of water column on air systems and does not measure refrigerant circuit vacuum.",
    "id": 274
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "An R-410A suction gauge reads 130 psig, which is 45 degrees F on the chart. The suction line temperature is 41 degrees F. What should the technician conclude?",
    "options": {
      "A": "Superheat is minus 4 degrees F, so the reading needs rechecking",
      "B": "The superheat is plus 4 degrees F, which is a healthy value for a system",
      "C": "The superheat is 41 degrees F, because the line temperature alone is used",
      "D": "The superheat is 86 degrees F, found by adding the two temperatures"
    },
    "answer": "A",
    "explanation": "Superheat is 41 minus 45, which is minus 4 degrees F. Vapor cannot be colder than its saturation temperature while flowing as vapor, so the number signals a thermometer error, a poor probe contact, or a wrong chart. Reversing the subtraction gives an invented positive value. Using the line temperature alone ignores the saturation reference. Adding the temperatures has no physical meaning.",
    "id": 275
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A return grille measures 24 inches by 20 inches, and an anemometer averages 300 fpm across it. About how many CFM pass through it?",
    "options": {
      "A": "600 CFM, found by dividing the air speed by the number of inches",
      "B": "7,200 CFM, found by multiplying 300 by the area in square inches",
      "C": "1,440 CFM, found by multiplying 300 by the area expressed in square feet",
      "D": "1,000 CFM, found by multiplying 300 by about 3.33 square feet"
    },
    "answer": "D",
    "explanation": "The area is 24 x 20 = 480 square inches, and 480 divided by 144 gives 3.33 square feet, so airflow is 300 x 3.33, about 1,000 CFM. Dividing by inches mixes units. A figure of 1,440 uses an incorrect area. Multiplying by square inches gives a number 144 times too large, because CFM needs the area in square feet.",
    "id": 276
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A technician uses an infrared thermometer on a bare, shiny copper suction line and gets an unusually low reading. What is the most likely reason?",
    "options": {
      "A": "Bright copper reflects surrounding heat, so the reading is unreliable",
      "B": "Refrigerant inside the pipe absorbs infrared energy before it reaches the sensor",
      "C": "The infrared sensor measures only the temperature of the refrigerant vapor inside",
      "D": "Copper conducts so much heat that the surface always reads far above actual"
    },
    "answer": "A",
    "explanation": "Shiny metal has low emissivity, meaning it radiates little heat of its own and reflects what is around it, so an infrared reading is poor. Covering a spot with flat paint or tape improves it. The refrigerant inside does not block the surface radiation. An infrared meter reads the surface, not the vapor. High conductivity does not push the reading upward.",
    "id": 277
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A thermometer placed in a stirred glass of ice and water reads 35 degrees F. What should the technician do before using it for superheat?",
    "options": {
      "A": "Ignore the error because superheat is a large number that hides small errors",
      "B": "Use the thermometer for the suction line only and a different one for the liquid",
      "C": "Correct all its readings by subtracting 3 degrees F or replace the thermometer",
      "D": "Add 3 degrees F to each reading because the error always runs low"
    },
    "answer": "C",
    "explanation": "Ice water is 32 degrees F, so the thermometer reads 3 degrees high, and subtracting 3 degrees from readings corrects it. Superheat and subcooling are only about 10 degrees, so a 3 degree error is a large share. Using it on one line only does not remove the error. Adding 3 degrees would double the mistake because this thermometer reads high, not low.",
    "id": 278
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A clamp meter around both conductors of a 240 volt compressor circuit reads near zero amps while the compressor runs. What explains this?",
    "options": {
      "A": "The compressor is drawing no current because the contactor has opened",
      "B": "The meter was set to resistance, which always reads near zero amps",
      "C": "The compressor motor is perfectly efficient and draws no current",
      "D": "The magnetic fields of the two conductors cancel inside the jaws"
    },
    "answer": "D",
    "explanation": "Current flows in opposite directions in the two conductors, so their fields cancel inside the clamp and the meter shows almost nothing. Clamping one conductor gives the real current. If the contactor were open, the compressor would not be running. A meter set to the wrong function would display a different quantity, not a current of zero. No motor draws zero current while running.",
    "id": 279
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A system has a suction gauge at 107 psig (35 degrees F), a suction line at 55 degrees F, and a manufacturer target superheat of 10 degrees F. What is the difference from target?",
    "options": {
      "A": "The superheat is 10 degrees F too high, at a measured 20 degrees F",
      "B": "The superheat is 10 degrees F too low, giving a measured value of 0 degrees F",
      "C": "The superheat is 20 degrees F too high, giving a measured value of 30 degrees F",
      "D": "The superheat matches the target exactly, so no action should be taken"
    },
    "answer": "A",
    "explanation": "The measured superheat is 55 minus 35, which is 20 degrees F, and the target is 10, so the value is 10 degrees high. A value of 0 would need a line at 35 degrees F. A value of 30 would need a line at 65 degrees F. A match with target is false, since 20 is double 10, which signals a starved evaporator that calls for further checks.",
    "id": 280
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "Which practice best protects the vacuum pump and gives the most accurate decay test result when evacuating a system?",
    "options": {
      "A": "Use long small-diameter hoses so that the micron gauge sits far from the pump",
      "B": "Use short, wide hoses, remove valve cores if allowed, and read at the system",
      "C": "Use the center manifold hose only, because gauge hoses add moisture to the system",
      "D": "Use a compound gauge at the pump inlet and stop when it reaches 29 inches"
    },
    "answer": "B",
    "explanation": "Large short hoses and removed cores let vapor flow freely, which speeds evacuation and gives a true system reading. Long small hoses slow the vapor and give misleadingly high readings. Skipping the gauge hoses does not remove moisture. A compound gauge cannot distinguish between 29 inches and a deep vacuum, so it cannot confirm dryness.",
    "id": 281
  },
  {
    "domain": "diagnostics",
    "chapter": 30,
    "question": "A true RMS meter is preferred when measuring an electronically commutated motor on a variable speed system. Why is it the better choice?",
    "options": {
      "A": "It displays resistance values that a standard meter cannot measure in motors",
      "B": "It averages the readings so that rapid changes in voltage are hidden",
      "C": "It stays accurate when the waveform is not a clean sine",
      "D": "It reduces the risk of electric shock by lowering the circuit voltage"
    },
    "answer": "C",
    "explanation": "Variable speed drives and electronically commutated motors produce distorted waveforms, and a true RMS meter calculates the correct effective value, while an average-responding meter can be off by 10 percent or more. A true RMS meter does not add resistance functions or filter out changes. It also does not lower circuit voltage, and safety still depends on the category rating and good lead condition.",
    "id": 282
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "A 45 uF run capacitor has a tolerance of plus or minus 6 percent. What is the acceptable capacitance range?",
    "options": {
      "A": "40.5 to 49.5 uF, found by applying a tolerance of 10 percent",
      "B": "42.3 to 47.7 uF, found by subtracting and adding 6 percent of 45",
      "C": "39.0 to 51.0 uF, found by applying a tolerance of 6 uF each way",
      "D": "44.0 to 46.0 uF, found by applying a fixed tolerance of 1 uF each way"
    },
    "answer": "B",
    "explanation": "Six percent of 45 is 2.7, so the range is 45 minus 2.7, which is 42.3, to 45 plus 2.7, which is 47.7 uF. A 10 percent tolerance would be wider than the rating on the case. A tolerance of 6 uF is a flat amount and not a percent. A fixed 1 uF tolerance is far narrower than the rated tolerance and would condemn good capacitors.",
    "id": 283
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "A technician measures common to start at 2.4 ohms and common to run at 1.1 ohms on a compressor. What should the start to run reading be?",
    "options": {
      "A": "1.3 ohms, found by subtracting the run resistance from the start resistance",
      "B": "1.1 ohms, since the run winding alone carries all the motor current",
      "C": "2.4 ohms, because the start winding is the larger of the two readings",
      "D": "3.5 ohms, found by adding the two readings from common"
    },
    "answer": "D",
    "explanation": "In a single-phase compressor, start to run passes through both windings in series, so it equals 2.4 plus 1.1, or 3.5 ohms. Subtracting the readings would not describe a series path. The run winding alone is only one segment of that path. Taking only the larger reading ignores the second winding that the meter probes also pass through.",
    "id": 284
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "A compressor hums and then the overload opens. Line voltage is 238 volts, and the windings test good. What is the most likely cause?",
    "options": {
      "A": "A failed or weak run capacitor that cannot provide the starting torque",
      "B": "An overcharge of refrigerant that lifts the suction pressure above normal",
      "C": "A dirty filter that restricts the return air flow to the evaporator",
      "D": "A thermostat set several degrees too low for the room temperature"
    },
    "answer": "A",
    "explanation": "A humming compressor drawing near locked rotor amps with good voltage and good windings usually lacks the phase shift from the capacitor to begin turning. An overcharge may raise pressures but does not make a motor hum without turning at startup. A dirty filter reduces airflow, not motor torque. A thermostat setting only controls whether the call for cooling occurs and cannot cause a hum.",
    "id": 285
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "With the power locked out, a megger reads 800 ohms from a compressor terminal to the shell. What does this reading indicate?",
    "options": {
      "A": "Normal winding insulation, since any nonzero reading proves the motor is sound",
      "B": "A high-resistance connection at the terminal that only needs tightening",
      "C": "A weak run capacitor, because capacitors cause low readings to the shell",
      "D": "A grounded winding with failed insulation, so replace the compressor"
    },
    "answer": "D",
    "explanation": "Insulation to ground should read in the megohm range, often over 100 megohms on a megger. A reading of 800 ohms shows current leaking from the winding to the shell, which means the insulation has broken down. A nonzero reading does not prove health. A loose terminal affects continuity, not the resistance to the shell. A capacitor is not in this measurement path.",
    "id": 286
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "A system on R-410A shows 95 degrees F outdoor air, a head pressure of 446 psig (125 degrees F), and a slightly high suction pressure. What is the most likely cause?",
    "options": {
      "A": "A liquid line restriction that starves the evaporator of refrigerant",
      "B": "A dirty condenser coil limiting heat rejection to the outdoor air",
      "C": "A completely open compressor winding that stops the motor from running",
      "D": "A low refrigerant charge that has lowered the pressure in the condenser"
    },
    "answer": "B",
    "explanation": "The condenser temperature difference is 125 minus 95, which is 30 degrees F, above the roughly 15 to 25 expected for a clean coil, which points to poor heat rejection. A restriction would lower suction pressure. An open winding would stop the compressor, so there would be no high head pressure. A low charge lowers the pressures instead of raising head pressure.",
    "id": 287
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "The voltage at a disconnect is 238 volts, and the voltage at the compressor terminals while running is 220 volts. What explains the difference?",
    "options": {
      "A": "The compressor creates extra voltage because the motor is inductive when running",
      "B": "The meter is more accurate at the disconnect, so the lower reading is false",
      "C": "Voltage drop in the wiring, connections or contactor between the two points",
      "D": "The capacitor stores energy and returns it as a lower voltage to the motor"
    },
    "answer": "C",
    "explanation": "Voltage lost along conductors, lugs and contacts under load is voltage drop, and 18 volts is a large loss that suggests a loose connection or a pitted contactor. A motor does not raise the voltage at its own terminals. Meters can be accurate at both places. A capacitor shifts current timing in a winding and does not lower the supply voltage.",
    "id": 288
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "A filter drier has a liquid line temperature of 104 degrees F entering and 92 degrees F leaving, and the evaporator is starved. What is the fault?",
    "options": {
      "A": "A restricted drier, since a 12 degree F drop shows a blockage",
      "B": "A normal drier, since any drier causes about a 12 degree drop in temperature",
      "C": "A defective condenser fan that is lowering the liquid line temperature",
      "D": "An overcharge that is raising the liquid line temperature above normal"
    },
    "answer": "A",
    "explanation": "A temperature drop of more than a few degrees F across a drier shows a pressure drop and flashing refrigerant at a restriction. A healthy drier has only a degree or two of difference. A condenser fan fault would raise head pressure, not create a drop across one component. An overcharge increases subcooling and does not produce a temperature difference across the drier.",
    "id": 289
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "A compressor draws 11.0 amps with an RLA of 18.6, shows high suction pressure and low head pressure. What does this pattern suggest?",
    "options": {
      "A": "A failed run capacitor that has shifted the motor phase out of timing",
      "B": "A dirty condenser coil that is preventing the heat from reaching the air",
      "C": "An overcharge that has filled the condenser coil with extra liquid",
      "D": "Worn compressor valves letting discharge vapor leak to the low side"
    },
    "answer": "D",
    "explanation": "A compressor that cannot build a pressure difference moves little refrigerant, so amps are low, suction pressure rises and head pressure falls. A dirty condenser raises head pressure and amps. An overcharge raises both pressures and current. A weak capacitor would more likely cause a hum, slow starts or high amps, not a smoothly running low amp draw.",
    "id": 290
  },
  {
    "domain": "diagnostics",
    "chapter": 31,
    "question": "After a compressor burnout, which step is most important before starting the replacement compressor?",
    "options": {
      "A": "Bypass the high pressure switch so that the unit does not trip again",
      "B": "Add a little more refrigerant than the nameplate states for a safety margin",
      "C": "Find and correct the cause, then replace the drier and clean the system",
      "D": "Install the replacement compressor and charge by feel at the suction line"
    },
    "answer": "C",
    "explanation": "A burnout that is not explained will repeat, so the cause, which may be low voltage, a restriction, moisture or a blocked airflow, must be found and fixed, and acid-contaminated oil and debris must be removed with a new drier and appropriate cleaning. Extra refrigerant increases head pressure. Bypassing a safety control risks equipment and fire. Charging by feel has no measurable basis.",
    "id": 291
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "A 3-ton system has a SEER of 16. Using watts equals BTU per hour divided by SEER, what is the approximate power draw?",
    "options": {
      "A": "2,250 watts, found by dividing 36,000 BTU per hour by the SEER value",
      "B": "Under one watt, found by dividing the SEER value by 36,000 BTU per hour",
      "C": "3,000 watts, found by dividing the tonnage value by the SEER value",
      "D": "5,760 watts, found by multiplying 36,000 BTU per hour by the SEER value"
    },
    "answer": "A",
    "explanation": "A 3-ton system delivers 3 x 12,000 = 36,000 BTU per hour, and dividing by 16 gives 2,250 watts. Dividing in the opposite order produces a tiny fraction, under one watt. Dividing tons by SEER ignores the 12,000 BTU per ton and gives a wrong unit. Multiplying by SEER makes power grow with efficiency, which is backward, since a higher SEER means less power for the same cooling.",
    "id": 292
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "At 15 cents per kilowatt-hour, a system drawing 2.25 kW runs 1,000 hours. What is the seasonal electric cost?",
    "options": {
      "A": "$225.00, found by multiplying 2.25 by 100 hours at the stated rate",
      "B": "$150.00, found by multiplying 1,000 hours by the price per kilowatt-hour",
      "C": "$15.00, found by dividing 2.25 kW by the price per kilowatt-hour",
      "D": "$337.50, found by multiplying 2.25 kW by 1,000 hours by $0.15"
    },
    "answer": "D",
    "explanation": "Energy equals power times time, so 2.25 x 1,000 = 2,250 kWh, and at $0.15 per kWh the cost is $337.50. Using 100 hours misstates the run time. Multiplying hours by price alone ignores the power draw. Dividing power by price has meaningless units and does not give a cost.",
    "id": 293
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "At installation, a system had a condenser temperature difference of 15 degrees F. At a yearly visit it is 25 degrees F with unchanged superheat and subcooling. What is likely?",
    "options": {
      "A": "The metering device is oversized and is passing too much refrigerant",
      "B": "The evaporator filter is clogged and has reduced the indoor airflow",
      "C": "The condenser coil is dirty and not rejecting heat as well as before",
      "D": "The refrigerant charge is low because of a slow leak in the line set"
    },
    "answer": "C",
    "explanation": "A higher temperature difference between condensing and outdoor air, with the charge indicators unchanged, means the condenser is rejecting heat less effectively, usually from dirt. An oversized metering device would change superheat. A clogged filter lowers suction pressure and delta T. A low charge lowers subcooling and head pressure rather than raising the condenser temperature difference.",
    "id": 294
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "Why should a technician keep a record of readings from each maintenance visit for a customer's equipment?",
    "options": {
      "A": "Later visits can compare against a baseline and spot drift",
      "B": "The record replaces the need to measure pressures at future service visits",
      "C": "The record proves that the system needs a complete replacement every year",
      "D": "The record allows the technician to skip checking the refrigerant charge"
    },
    "answer": "A",
    "explanation": "A baseline lets a technician see changes such as a slowly rising head pressure or a drifting capacitor value that single readings hide. Records do not replace new measurements, because conditions change each visit. They do not prove that replacement is needed. They also do not remove the need to check the charge, which still requires readings taken correctly.",
    "id": 295
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "A technician finds a cracked heat exchanger on a customer's gas furnace during maintenance. What is the correct action?",
    "options": {
      "A": "Say nothing unless the customer asks, to avoid raising unneeded worries",
      "B": "Seal the crack with high-temperature caulk and return the furnace to service",
      "C": "Tell the customer, advise shutting the furnace off, and document it",
      "D": "Replace only the flame sensor and note that the furnace now works"
    },
    "answer": "C",
    "explanation": "A cracked heat exchanger can leak combustion gases, including carbon monoxide, into the air stream, which is a life safety hazard. The customer must be told plainly and advised to keep the furnace off until it is repaired or replaced, with written documentation. Silence is dishonest and unsafe. Caulk is not an approved repair. A flame sensor has no connection to the crack.",
    "id": 296
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "Which EPA Section 608 certification covers servicing high-pressure refrigerant systems such as residential air conditioners?",
    "options": {
      "A": "Type I, which covers small appliances with a factory charge of 5 pounds or less",
      "B": "Type II, which covers high-pressure and very high-pressure appliances",
      "C": "Type III, which covers low-pressure appliances such as large centrifugal chillers",
      "D": "Core only, which covers general rules and does not cover any equipment type"
    },
    "answer": "B",
    "explanation": "Type II is the certification for servicing high-pressure systems, which includes typical residential and light commercial air conditioning. Type I is limited to small appliances such as household refrigerators. Type III applies to low-pressure systems such as some chillers. Core alone is a required section but does not by itself authorize work on a specific equipment type, and Universal combines all of them.",
    "id": 297
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "A baseline capacitor reading was 44 uF, then 43 uF the next year, then 42 uF this year on a 45 uF, 6 percent rated part. What should the technician do?",
    "options": {
      "A": "Leave it alone, since it has not changed more than 1 uF in any year",
      "B": "Replace it now, since the reading is slightly below the acceptable range",
      "C": "Replace the compressor, since a falling capacitor reading always means winding damage",
      "D": "Add refrigerant, because falling capacitance results from low charge in the system"
    },
    "answer": "B",
    "explanation": "The acceptable range is 42.3 to 47.7 uF, so 42 uF is out of tolerance, and the steady yearly decline shows the part is wearing out. Waiting for it to fail risks a no-cool call in the heat. A capacitor reading says nothing about compressor windings, which are tested separately. Refrigerant charge has no effect on capacitance.",
    "id": 298
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "A customer asks whether a repair will cut the electric bill by exactly 20 percent. What is the best answer?",
    "options": {
      "A": "Promise the savings, because customers prefer a clear and definite figure",
      "B": "Explain what was repaired, what you measured, and that savings vary",
      "C": "Avoid the question entirely and move on to the invoice for the visit",
      "D": "Tell the customer that repairs can never change the electric bill at all"
    },
    "answer": "B",
    "explanation": "Honest communication describes the work and measurements and states that savings depend on use, weather and the condition of the system. An exact promise can be wrong and damages trust. Ignoring the question leaves the customer without information. Saying repairs never help is also untrue, since a dirty coil or a restricted filter can raise energy use measurably.",
    "id": 299
  },
  {
    "domain": "professional",
    "chapter": 32,
    "question": "A restaurant walk-in cooler is checked quarterly. Which task is usually the most effective for keeping its head pressure and energy use down?",
    "options": {
      "A": "Replacing the evaporator fan blade every year regardless of its condition",
      "B": "Adding a small amount of refrigerant each visit as a precaution",
      "C": "Lowering the thermostat setting several degrees below product requirements",
      "D": "Cleaning the condenser coil of grease and lint that block airflow"
    },
    "answer": "D",
    "explanation": "Kitchens produce grease and lint that coat condenser fins, which raises head pressure and energy use, so regular cleaning gives a large benefit for little cost. Adding refrigerant to a system within range overcharges it and raises pressures. Lowering the setting wastes energy and may freeze product. Replacing a fan blade that is in good condition does not change head pressure.",
    "id": 300
  }
];
