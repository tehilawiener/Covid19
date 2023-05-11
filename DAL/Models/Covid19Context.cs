using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.Models
{
    public partial class Covid19Context : DbContext
    {
        public Covid19Context()
        {
        }

        public Covid19Context(DbContextOptions<Covid19Context> options)
            : base(options)
        {
        }

        public virtual DbSet<CoronaDetail> CoronaDetails { get; set; } = null!;
        public virtual DbSet<Hmomember> Hmomembers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=Covid19;Trusted_Connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CoronaDetail>(entity =>
            {
                entity.HasKey(e => e.HmomemberId)
                    .HasName("PK_CoronaDetails696");

                entity.Property(e => e.HmomemberId)
                    .HasMaxLength(9)
                    .HasColumnName("HMOmemberID")
                    .IsFixedLength();

                entity.Property(e => e.DateOfVaccines1).HasColumnType("date");

                entity.Property(e => e.DateOfVaccines2).HasColumnType("date");

                entity.Property(e => e.DateOfVaccines3).HasColumnType("date");

                entity.Property(e => e.DateOfVaccines4).HasColumnType("date");

                entity.Property(e => e.RecoveryDate).HasColumnType("date");

                entity.Property(e => e.TimeOfPositiveAnswer).HasColumnType("date");

                entity.Property(e => e.Vmanufacturer1)
                    .HasMaxLength(50)
                    .HasColumnName("VManufacturer1")
                    .IsFixedLength();

                entity.Property(e => e.Vmanufacturer2)
                    .HasMaxLength(50)
                    .HasColumnName("VManufacturer2")
                    .IsFixedLength();

                entity.Property(e => e.Vmanufacturer3)
                    .HasMaxLength(50)
                    .HasColumnName("VManufacturer3")
                    .IsFixedLength();

                entity.Property(e => e.Vmanufacturer4)
                    .HasMaxLength(50)
                    .HasColumnName("VManufacturer4")
                    .IsFixedLength();
            });

            modelBuilder.Entity<Hmomember>(entity =>
            {
                entity.ToTable("HMOmember");

                entity.Property(e => e.Id)
                    .HasMaxLength(9)
                    .HasColumnName("ID")
                    .IsFixedLength();

                entity.Property(e => e.BurnDate).HasColumnType("date");

                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.FoneNumber)
                    .HasMaxLength(9)
                    .IsFixedLength();

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.MobileFone)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Street).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
