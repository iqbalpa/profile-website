import React from "react";

const Experience = () => {
	return (
		<>
			<div class="bg-ResolutionBlue text-white flex flex-col justify-center py-6 lg:py-12">
				<div class="w-full mx-auto lg:max-w-4xl">
					<div class="relative">
						<div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
						<div class="space-y-12 lg:space-y-8">
							<div>
								<div class="flex flex-col items-center">
									<div className="w-[40rem]">
										<div class="flex items-center justify-start w-full mx-auto">
											<div class="w-full bg-red-500 lg:w-1/2 lg:pr-8">
												<div class="text-xl">
													<h1 className="font-bold">Fasilkom UI</h1>
													<h2>January 2023 - Present</h2>
												</div>
											</div>
										</div>
										<div class="flex items-center justify-end w-full mx-auto">
											<div class="w-full bg-blue-500 lg:w-1/2 lg:pl-8">
												<p>Teaching Assistant for Programming Foundations 1</p>
											</div>
										</div>
									</div>
									<div class="absolute flex items-center justify-center w-4 h-4 transform -translate-x-1/2 -translate-y-4 bg-green-500 border-2 border-green-500 rounded-full left-1/2 sm:translate-y-0"></div>
								</div>
							</div>

							<div>
								<div class="flex flex-col items-center">
									<div className="w-[40rem]">
										<div class="flex items-center justify-start w-full mx-auto">
											<div class="w-full lg:w-1/2 lg:pr-8">
												<div class="text-xl">
													<h1 className="font-bold">Fasilkom UI</h1>
													<h2>August 2022 - January 2023</h2>
												</div>
											</div>
										</div>
										<div class="flex items-center justify-end w-full mx-auto">
											<div class="w-full lg:w-1/2 lg:pl-8">
												<p>Teaching Assistant for Calculus 1</p>
											</div>
										</div>
									</div>
									<div class="absolute flex items-center justify-center w-4 h-4 transform -translate-x-1/2 -translate-y-4 bg-green-500 border-2 border-green-500 rounded-full left-1/2 sm:translate-y-0"></div>
								</div>
							</div>

							<div>
								<div class="flex flex-col items-center">
									<div className="w-[40rem]">
										<div class="flex items-center justify-start w-full mx-auto">
											<div class="w-full lg:w-1/2 lg:pr-8">
												<div class="text-xl">
													<h1 className="font-bold">RISTEK Fasilkom UI</h1>
													<h2>March 2023 - Present</h2>
												</div>
											</div>
										</div>
										<div class="flex items-center justify-end w-full mx-auto">
											<div class="w-full lg:w-1/2 lg:pl-8">
												<p>Member of Data Science & Analytics</p>
											</div>
										</div>
									</div>
									<div class="absolute flex items-center justify-center w-4 h-4 transform -translate-x-1/2 -translate-y-4 bg-green-500 border-2 border-green-500 rounded-full left-1/2 sm:translate-y-0"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
