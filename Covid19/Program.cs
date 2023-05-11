var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped(typeof(DAL.ICoronaDetailDal), typeof(DAL.CoronaDetailsDal));
builder.Services.AddScoped(typeof(BLL.ICoronaDetailsBll), typeof(BLL.CoronaDetailsBll));

builder.Services.AddScoped(typeof(DAL.IHMOmemberDal), typeof(DAL.HMOmemberDal));
builder.Services.AddScoped(typeof(BLL.IHMOmemberBll), typeof(BLL.HMOmemberBll));

builder.Services.AddCors(c => c.AddPolicy("AllowAll", (options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod())));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowAll");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
